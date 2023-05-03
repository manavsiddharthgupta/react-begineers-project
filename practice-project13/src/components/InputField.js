import { useState } from "react";
const InputField = (props) => {
  const [field, setField] = useState("");
  const [touchedValidval, setTouchValidityval] = useState(false);

  let isValidField = false;
  if (props.type === "text") {
    isValidField = field.trim() !== "";
  }
  if (props.type === "email") {
    isValidField = field.includes("@");
  }
  return (
    <div className="form-control">
      <label htmlFor={props.htmlFor}>{props.labeling}</label>
      <input
        className={`${touchedValidval && !isValidField && "inpErr"}`}
        onChange={(e) => {
          setField(e.target.value);
        }}
        onBlur={() => {
          setTouchValidityval(true);
        }}
        value={field}
        type={props.type}
        id={props.id}
      />
      {touchedValidval && !isValidField && (
        <p className="error-text">{props.errorMess}</p>
      )}
    </div>
  );
};
export default InputField;
