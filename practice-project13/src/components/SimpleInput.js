import { useInput } from "../customhooks/use-input";

const SimpleInput = (props) => {
  const [
    name,
    onsetName,
    touchedValidname,
    onBlurrname,
    isvalidName,
    resetName,
  ] = useInput("text");

  const [
    email,
    onsetemail,
    touchedValidemail,
    onBlurremail,
    isvalidEmail,
    resetEmail,
  ] = useInput("email");

  let isFormValid = false;
  if (isvalidName && isvalidEmail) {
    isFormValid = true;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!isFormValid) {
          return;
        }
        console.log(name);
        console.log(email);
        resetName();

        resetEmail();
      }}
    >
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          className={`${touchedValidname && !isvalidName && "inpErr"}`}
          onChange={onsetName}
          onBlur={onBlurrname}
          value={name}
          type="text"
          id="name"
        />
        {touchedValidname && !isvalidName && (
          <p className="error-text">invalid input, empty Name!</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email">Your email</label>
        <input
          className={`${touchedValidemail && !isvalidEmail && "inpErr"}`}
          onChange={onsetemail}
          onBlur={onBlurremail}
          value={email}
          type="email"
          id="email"
        />
        {touchedValidemail && !isvalidEmail && (
          <p className="error-text">invalid input, add @!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
