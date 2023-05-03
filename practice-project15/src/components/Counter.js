import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { reduxcounterDispatch } from "../store/reduxStore";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();
  const onSetIncrement = () => {
    dispatch(reduxcounterDispatch.increment());
  };

  const onSetDecrement = () => {
    dispatch(reduxcounterDispatch.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(reduxcounterDispatch.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.space}>
        <button onClick={onSetIncrement}>INCREMENT</button>
        <button onClick={onSetDecrement}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
