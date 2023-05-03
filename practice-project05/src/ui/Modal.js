import Button from "./Button";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      <div onClick={props.onsetModal} className="setmodal"></div>
      <div className="modal">
        <header className="modal_header">Invalid Input</header>
        <div className="modal_main">
          <p>{props.message}</p>
        </div>
        <footer className="modal_footer">
          <Button className="btnchck" onClick={props.onsetModal}>
            Okay
          </Button>
        </footer>
      </div>
    </>
  );
};
export default Modal;
