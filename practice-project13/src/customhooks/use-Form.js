import { useReducer } from "react";

const initialState = {
  value: "",
  istouched: false,
};

const reducer = (state, action) => {
  if (action.type === "SETVAL") {
    return {
      ...state,
      value: action.val,
    };
  }
  if (action.type === "SETVALIDITY") {
    return {
      ...state,
      istouched: action.val,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      istouched: false,
    };
  }
  return {
    ...state,
  };
};

export const useForm = (type) => {
  // const [value, setValue] = useState("");
  // const [istouched, setTouchValidity] = useState(false);

  const [fieldStates, dispatch] = useReducer(reducer, initialState);

  let isValid = false;
  if (type === "text") {
    isValid = fieldStates.value.trim() !== "";
  }
  if (type === "email") {
    isValid = fieldStates.value.includes("@");
  }

  const onSetValueHandler = (e) => {
    dispatch({ type: "SETVAL", val: e.target.value });
  };

  const onSetTouchedValidityHandler = () => {
    dispatch({ type: "SETVALIDITY", val: true });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: fieldStates.value,
    istouched: fieldStates.istouched,
    isValid,
    onSetValueHandler,
    onSetTouchedValidityHandler,
    reset,
  };
};
