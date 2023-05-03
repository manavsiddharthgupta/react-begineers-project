import "./EachItem.css";
import Button from "../../ui/Button";

const EachItem = (props) => {
  const removetodo = () => {
    props.onremoveitem(props.imp);
  };
  return (
    <div className="todoList_outer">
      <p>
        {props.todo}
        <Button onClick={removetodo}>remove</Button>
      </p>
    </div>
  );
};
export default EachItem;
