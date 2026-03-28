import { useCallback, useEffect, useMemo } from "react";
import { UserContext } from "../contexts/UserContext";
import usePersistedState from "../hooks/usePersistedState";
import * as authApi from "../api/authApi";

const initialAuthState = {
  email: "",
  accessToken: "",
  refreshToken: "",
};

export default function UserProvider({ children }) {
  const [auth, setAuth] = usePersistedState("auth", initialAuthState);

  useEffect(() => {
    const logoutListener = () => {
      setAuth(initialAuthState);
    };

    window.addEventListener("auth-logout", logoutListener);

    return () => {
      window.removeEventListener("auth-logout", logoutListener);
    };
  }, [setAuth]);

  const userLoginHandler = useCallback(
    (authData) => {
      setAuth(authData);
    },
    [setAuth]
  );

  const userLogoutHandler = useCallback(async () => {
    try {
      if (auth.refreshToken) {
        await authApi.logout(auth.refreshToken);
      }
    } catch (error) {
      console.error("Logout failed:", error.message);
    } finally {
      setAuth(initialAuthState);
      localStorage.removeItem("auth");
    }
  }, [auth.refreshToken, setAuth]);

  const contextValue = useMemo(
    () => ({
      email: auth.email,
      accessToken: auth.accessToken,
      refreshToken: auth.refreshToken,
      isAuthenticated: Boolean(auth.accessToken),
      userLoginHandler,
      userLogoutHandler,
    }),
    [auth, userLoginHandler, userLogoutHandler]
  );

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}