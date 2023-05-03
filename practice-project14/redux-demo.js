const redux = require("redux");

const reducerFun = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = redux.createStore(reducerFun);

console.log(store.dispatch({ type: "INCREMENT" }));
console.log(store.dispatch({ type: "INCREMENT" }));
console.log(store.getState());
