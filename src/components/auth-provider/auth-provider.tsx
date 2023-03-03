import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { SIGN_IN_PAGE_PATH } from "../../router";

export const AUTH_COOKIE_NAME = "__auth";

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (flag: boolean) => void;
};

const initialAuthContext: AuthContextType = {
  isAuth: false,
  setIsAuth: () => {},
};

const AuthContext = React.createContext<AuthContextType>(initialAuthContext);

export type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider(props: AuthProviderProps) {
  const [isAuth, setIsAuth] = React.useState(false);
  const navigate = useNavigate();
  const [cookies] = useCookies();

  React.useEffect(() => {
    const isAuth = cookies[AUTH_COOKIE_NAME];

    setIsAuth(isAuth);

    if (!isAuth) navigate(SIGN_IN_PAGE_PATH);
  }, [cookies]);

  return (
    <AuthContext.Provider
      {...props}
      value={{
        isAuth,
        setIsAuth,
      }}
    />
  );
}
