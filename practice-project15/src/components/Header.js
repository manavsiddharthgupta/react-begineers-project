import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { reduxAuthDispatch } from "../store/reduxStore";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthentication);

  const logout = useDispatch();
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {auth && (
            <li>
              <a href="/">My Products</a>
            </li>
          )}
          {auth && (
            <li>
              <a href="/">My Sales</a>
            </li>
          )}
          {auth && (
            <li>
              <button
                onClick={() => {
                  logout(reduxAuthDispatch.logout());
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
