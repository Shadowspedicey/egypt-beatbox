// Client-only auth helpers (JWT in memory + refresh token in localStorage)

let accessToken: string | null = null;
let logoutFn: (() => void) | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

export const setLogoutHandler = (fn: () => void) => {
  logoutFn = fn;
};

export const logout = () => {
  logoutFn?.();
};

// --- Client-side helpers (localStorage for refresh token) ---
const REFRESH_KEY = "refreshToken";

export const getRefreshTokenClient = () => {
  return localStorage.getItem(REFRESH_KEY);
};

export const setRefreshTokenClient = (token: string | null) => {
  if (typeof window === "undefined") return;
  if (!token) localStorage.removeItem(REFRESH_KEY);
  else localStorage.setItem(REFRESH_KEY, token);
};

export const clearAuth = () => {
  setAccessToken(null);
  setRefreshTokenClient(null);
};

// Refresh access token using refresh token stored in localStorage
export const refreshAccessToken = async (): Promise<string> => {
	if (typeof window === "undefined") throw new Error("No window");
	const refresh = getRefreshTokenClient();
	console.log(`ass ${new Date()} ${refresh}`);
  if (!refresh) throw new Error("No refresh token");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: refresh }),
    credentials: "omit",
  });

  if (!res.ok) {
    // If backend returns 401 or other, clear stored tokens
	console.log(refresh);
    clearAuth();
    throw new Error("refresh failed");
  }

  const data = await res.json();
  console.log(data);
  setAccessToken(data.token);
  setRefreshTokenClient(data.refreshToken);
  return data.token;
};

// --- JWT helpers ---
export const parseJwt = (token: string | null) => {
  if (!token) return null;
  try {
    const payload = token.split(".")[1];
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decoded);
  } catch {
    return null;
  }
};

export const isTokenAdmin = (token: string | null) => {
  const p = parseJwt(token);
  if (!p) return false;
  if (p.role === "Admin") return true;
  if (Array.isArray(p.roles) && p.roles.includes("Admin")) return true;
  if (p.isAdmin) return true;
  return false;
};

export const getUserNameFromToken = (token: string | null) => {
  const p = parseJwt(token);
  if (!p) return null;
  return p.name || p.username || p.email || null;
};

export const isAuthenticated = () => Boolean(accessToken);