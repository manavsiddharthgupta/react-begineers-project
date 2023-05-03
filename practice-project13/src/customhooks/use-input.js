import { useState } from "react";
export const useInput = (type) => {
  const [field, setField] = useState("");
  const [touchedValidValue, setTouchValidity] = useState(false);

  const onsetValue = (e) => {
    setField(e.target.value);
  };

  const onBlurr = () => {
    setTouchValidity(true);
  };

  const reset = () => {
    setField("");
    setTouchValidity(false);
  };

  let isvalidfield = false;
  if (type === "text") {
    isvalidfield = field.trim() !== "";
  }

  if (type === "email") {
    isvalidfield = field.includes("@");
  }
  return [field, onsetValue, touchedValidValue, onBlurr, isvalidfield, reset];
};
