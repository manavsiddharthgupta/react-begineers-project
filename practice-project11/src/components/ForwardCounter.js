import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  console.log("fd");
  const counter = useCounter((prevCounter) => prevCounter + 1);
  console.log(counter);
  console.log("fds");
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
