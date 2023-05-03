import React, { useState } from "react";

const initial = [
  { first_name: "", last_name: "" },
  { first_name: "", last_name: "" },
];

function App() {
  const [inputField, setInputField] = useState(initial);
  console.log(inputField);

  const increaseHandler = () => {
    setInputField((prev) => {
      let title = [...prev]
      title.push({ first_name: "", last_name: "" })
      return title;
    });
  };

  const handlechange = (ind,e ) => {
    console.log(ind,e.target.value)
    setInputField((prev) => {
      let chk = prev[ind];
      chk[e.target.name] = e.target.value;
      let title = [...prev];
      title[ind] = chk;
      return title;
    })
  }

  const onDeleteHandler = (index) => {
    console.log(index);
    let val = [...inputField];
    val.splice(index,1);
    setInputField(val)
  }
console.log("render");
  return (
    <div>
      <button onClick={increaseHandler}>+</button>
      {inputField.map((data,index) => {
        return <div key={index}>
          <input name="first_name" value={data.first_name} onChange={(e) => {handlechange(index,e)}}  />
          <input name="last_name" value={data.last_name} onChange={(e) => {handlechange(index,e)}}  />
          <button onClick={() => {
            onDeleteHandler(index)
          }}>-</button>
        </div>;
      })}
      {/* <button onClick={decreaseHandler}>-</button> */}
    </div>
  );
}

export default App;
