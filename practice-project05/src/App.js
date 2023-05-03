import React, { useState } from "react";
import ReactDOM from "react-dom";
import AddItem from "./components/todoInput/AddItem";
import ShowItem from "./components/todoOutput/ShowItem";
import Modal from "./ui/Modal";

let todos = [];

function App() {
  const [isvalid, setvalid] = useState(true);
  const [updatedTodos, setTodos] = useState(todos);

  const addtodods = (todoItem) => {
    console.log(todoItem);
    setTodos((prevtodos) => {
      let neTodos = [todoItem, ...prevtodos];
      return neTodos;
    })
  }

  const removeTodo = (id) => {
    console.log(id);
    setTodos((prevtodos) => {
      let updated = prevtodos.filter((each) => {
        return each.id !== id
      })
      return updated;
    })
  }
  const onsettrue = (e) => {
    if(e.target.classList.contains("setmodal") || e.target.classList.contains("btnchck")){
      setvalid(true);
    }
    console.log(e.target.classList)
    
  }

  const onsetValidity = (chck) =>{
    setvalid(chck);
  }

  let show = "";
  if (!isvalid) {
    show = ReactDOM.createPortal(<Modal onsetModal={onsettrue} message={"Empty input"} />, document.getElementById("allmodal"))
  }
  return (
    <>
      {show}
      <AddItem onAddtodo={addtodods} ifInvalid={onsetValidity} />
      <ShowItem onremovetodo={removeTodo} alltodos={updatedTodos} />
    </>
  );
}

export default App;
