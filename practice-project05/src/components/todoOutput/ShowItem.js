import "./ShowItem.css";
import React from "react";
import Card from "../../ui/Card";
import EachItem from "./EachItem";

const ShowItem = (props) => {

    const removeItem = (id) =>{
        props.onremovetodo(id)
    }
    
  return (
    <Card>
      {props.alltodos.map(item => (
        <EachItem key={item.id} imp={item.id} onremoveitem={removeItem} todo={item.work} />
      ))}
    </Card>
  );
};

export default ShowItem;
