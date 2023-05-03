import React,{ useState } from "react";
import Display from "./Display";
const Test = () => {
    const [init, setdata] = useState(0);

    const increment = () =>{
        setdata((previous) => {
            return previous+1;
        })
    }
    const decrement = () => {
        setdata((previous) => {
            return previous-1;
        })
    }

  return (
    <div>
      <button onClick={increment}>+</button>
      <Display data={init}/>
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default Test;
