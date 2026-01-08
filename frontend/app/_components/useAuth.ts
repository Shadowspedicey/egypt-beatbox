import { useAuthContext } from "@/app/_components/AuthContext";
import { setAccessToken, setLogoutHandler } from "@/lib/auth";
import { useEffect } from "react";

export default function useAuth() {
  const auth = useAuthContext();

  useEffect(() => {
    setAccessToken(auth.accessToken);
    setLogoutHandler(auth.logout);
  }, [auth.accessToken]);

  return auth;
}
