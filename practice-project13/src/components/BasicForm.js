import { useForm } from "../customhooks/use-Form";

const BasicForm = (props) => {
  const {
    value: Firstname,
    istouched: istouchedFirstName,
    isValid: isValidFirstName,
    onSetValueHandler: setFirstName,
    onSetTouchedValidityHandler: setTouchFirstNametrue,
    reset: resetFirstName,
  } = useForm("text");

  const {
    value: Lastname,
    istouched: istouchedLastName,
    isValid: isValidLastName,
    onSetValueHandler: setLastName,
    onSetTouchedValidityHandler: setTouchLastNametrue,
    reset: resetLastName,
  } = useForm("text");

  const {
    value: email,
    istouched: istouchedemail,
    isValid: isValidemail,
    onSetValueHandler: setemail,
    onSetTouchedValidityHandler: setTouchEmailtrue,
    reset: resetEmail,
  } = useForm("email");

  let isFormValidity = false;
  if (isValidFirstName && isValidLastName && isValidemail) {
    isFormValidity = true;
  }

  console.log("render");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!isFormValidity) {
          return;
        }

        console.log("submitted");
        console.log(Firstname, Lastname, email);
        resetFirstName();
        resetLastName();
        resetEmail();
      }}
    >
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={setFirstName}
            type="text"
            value={Firstname}
            onBlur={setTouchFirstNametrue}
            id="firstName"
          />
          {istouchedFirstName && !isValidFirstName && (
            <p className="error-text">invalid FirstName, empty field</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={setLastName}
            type="text"
            value={Lastname}
            onBlur={setTouchLastNametrue}
            id="lastName"
          />
          {istouchedLastName && !isValidLastName && (
            <p className="error-text">invalid LastName, empty field</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={setemail}
          type="email"
          value={email}
          onBlur={setTouchEmailtrue}
          id="email"
        />
        {istouchedemail && !isValidemail && (
          <p className="error-text">invalid Email, include @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValidity}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
