import React, { useContext } from "react";
import AuthContext from "../store/auth-context";



import classes from "./Navigation.module.css";

const Navigation = () => {
  const cntx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {cntx.islogIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cntx.islogIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cntx.islogIn && (
          <li>
            <button onClick={cntx.onloggingOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
