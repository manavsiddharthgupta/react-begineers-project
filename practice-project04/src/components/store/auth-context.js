import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  islogIn: false,
  onloggingOut: (val) => {},
  onloggingIn: (email, password) => {},
});

export const AuthorProvide = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const chckUserloggedIndetail = localStorage.getItem("isloggedIn");

    if (chckUserloggedIndetail === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isloggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isloggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        islogIn: isLoggedIn,
        onloggingOut: logoutHandler,
        onloggingIn: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
