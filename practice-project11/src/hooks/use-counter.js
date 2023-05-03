import { useState, useEffect } from "react";
const useCounter = (setCounterFunc) => {
  const [counter, setCounter] = useState(0);

  console.log("f");
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(setCounterFunc);
    }, 1000);

    return () => clearInterval(interval);
  }, [setCounterFunc]);

  return counter;
};

export default useCounter;
