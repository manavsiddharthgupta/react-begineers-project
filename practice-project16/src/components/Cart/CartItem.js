import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { reducerCart } from "../../store/CartStore";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, price, id } = props.item;
  const total = quantity * price;

  const increment = () => {
    dispatch(reducerCart.incrementItem(id));
  };

  const decrement = () => {
    dispatch(reducerCart.decrement(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
