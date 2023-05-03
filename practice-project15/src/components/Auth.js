import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { reduxAuthDispatch } from "../store/reduxStore";
const Auth = () => {
  const auth = useSelector((state) => state.auth.isAuthentication);
  const dispatch = useDispatch();
  return (
    <main className={classes.auth}>
      <section>
        <form
          onSubmit={() => {
            dispatch(reduxAuthDispatch.login());
          }}
        >
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          {!auth && <button>Login</button>}
        </form>
      </section>
    </main>
  );
};

export default Auth;
