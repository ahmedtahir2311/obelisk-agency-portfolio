import React, { useState, createContext, useContext } from "react";

//utils
import { getToken } from "@/utils/token";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [userData, setUserData] = useState(null);
  const [validUser, setValidUser] = useState(true);

  const setAuth = (token) => {
    setToken(token);
    // setUserData(jwtDecode(token));
    setValidUser(true);
  };

  React.useEffect(() => {
    const accessToken = getToken();
    accessToken ? setAuth(accessToken) : setValidUser(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        validUser,
        token,
        setUserData,
        setValidUser,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return context;
}
