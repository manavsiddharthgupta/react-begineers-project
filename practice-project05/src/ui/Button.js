import "./Button.css";

const Button = (props) => {
  return(
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      type={props.type || "submit"}
    >
      {props.children}
    </button>
  );
};
export default Button;