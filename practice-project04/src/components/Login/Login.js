import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import Input from "../UI/Input";

const reducer = (state, action) => {
  if (action.type === "USER_EMAIL_VAL") {
    return {
      emailValue: action.emailVal,
      emailisvalid: action.emailVal.includes("@"),
      passwordValue: state.passwordValue,
      passwordIsvalid: state.passwordIsvalid,
    };
  }
  if (action.type === "USER_PASS_VAL") {
    return {
      emailValue: state.emailValue,
      emailisvalid: state.emailisvalid,
      passwordValue: action.passVal,
      passwordIsvalid: action.passVal.trim().length > 6,
    };
  }
  if (action.type === "VALID_EMAIL") {
    return {
      emailValue: state.emailValue,
      emailisvalid: state.emailValue.includes("@"),
      passwordValue: state.passwordValue,
      passwordIsvalid: state.passwordIsvalid,
    };
  }
  if (action.type === "VALID_PASS") {
    return {
      emailValue: state.emailValue,
      emailisvalid: state.emailisvalid,
      passwordValue: state.passwordValue,
      passwordIsvalid: state.passwordValue.trim().length > 6,
    };
  }

  return {
    emailValue: "",
    emailisvalid: false,
    passwordValue: "",
    passwordIsvalid: false,
  };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [loginState, dispatch] = useReducer(reducer, {
    emailValue: "",
    emailisvalid: null,
    passwordValue: "",
    passwordIsvalid: null,
  });

  const cntx = useContext(AuthContext);

  const emailChckRef = useRef()
  const passwordChckRef = useRef()


  useEffect(() => {
    let timeOutid = setTimeout(() => {
      console.log("check for validity");
      setFormIsValid(loginState.emailisvalid && loginState.passwordIsvalid);
    }, 500);

    return () => {
      console.log("clear previous time out");
      clearTimeout(timeOutid);
    };
  }, [loginState.emailisvalid, loginState.passwordIsvalid]);

  const emailChangeHandler = (event) => {
    dispatch({ type: "USER_EMAIL_VAL", emailVal: event.target.value });
    // setEnteredEmail(event.target.value);
    // setEmailIsValid(event.target.value.includes('@'));
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: "USER_PASS_VAL", passVal: event.target.value });
    // setEnteredPassword(event.target.value);
    // setPasswordIsValid(event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatch({ type: "VALID_EMAIL" });
    // setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatch({ type: "VALID_PASS" });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      cntx.onloggingIn(loginState.emailValue, loginState.passwordValue);
    } else if(!loginState.emailisvalid){
      emailChckRef.current.focus()
    } else {
      passwordChckRef.current.focus()
    }
    
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailChckRef}
          chckLoginState={loginState.emailisvalid}
          type="email"
          id="email"
          label="E-Mail"
          value={loginState.emailValue}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordChckRef}
          chckLoginState={loginState.passwordIsvalid}
          type="password"
          id="password"
          label="Password"
          value={loginState.passwordValue}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
