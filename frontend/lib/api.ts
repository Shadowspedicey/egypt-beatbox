import axios, { type AxiosRequestHeaders } from "axios";
import { getAccessToken, refreshAccessToken, logout } from "./auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Attach access token
api.interceptors.request.use(async (config) => {
  let token = getAccessToken();
  if (!token)
	token = await refreshAccessToken();
  if (token) {
    config.headers = { ...(config.headers as AxiosRequestHeaders || {}), Authorization: `Bearer ${token}` } as AxiosRequestHeaders;
  }
  return config;
});

// Handle refresh with single-lock queue
let isRefreshing = false;
let failedQueue: Array<{ resolve: (token: string) => void; reject: (err: unknown) => void }> = [];

const processQueue = (err: unknown, token?: string) => {
  failedQueue.forEach((p) => (err ? p.reject(err) : p.resolve(token!)));
  failedQueue = [];
};

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          if (token) original.headers = { ...(original.headers as AxiosRequestHeaders || {}), Authorization: `Bearer ${token}` } as AxiosRequestHeaders;
          return api(original);
        });
      }

      original._retry = true;
      isRefreshing = true;

      try {
        const token = await refreshAccessToken();
        processQueue(null, token);
        if (token) original.headers = { ...(original.headers as AxiosRequestHeaders || {}), Authorization: `Bearer ${token}` } as AxiosRequestHeaders;
        return api(original);
      } catch (e) {
        processQueue(e);
        logout();
        return Promise.reject(e);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
