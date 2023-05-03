import React, { useState, useRef, useEffect } from "react";
import Button from "../../ui/Button";
import "./AddItem.css";
import Card from "../../ui/Card";

const AddItem = (props) => {
  const todo = useRef("");
  const [isValid, setValid] = useState(true);
  console.log("RE-RENDER")

  useEffect(()=>{
    todo.current.focus();
  },[])
  const setcolor = () => {
    if(!isValid){
      setValid(true);
      props.ifInvalid(true);
      console.log("setting true")
    }
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if(todo.current.value.trim().length === 0){
      props.ifInvalid(false);
      setValid(false);
      console.log("invalid input")
      return;
    }
    console.log(todo.current.value);
    const todoitem = {work:todo.current.value, id:Math.random().toString()}
    props.onAddtodo(todoitem);
    todo.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={onHandleSubmit}>
        <input className={!isValid ? "invalid" : ""} onChange={setcolor} ref={todo} type="text" />
        <Button className="btntype" type={onsubmit}>Add</Button>
      </form>
    </Card>
  );
};
export default AddItem;
