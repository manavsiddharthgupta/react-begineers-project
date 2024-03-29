import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cartItem);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((data) => (
          <CartItem
            item={{
              title: data.title,
              quantity: +data.qty,
              price: +data.price,
              id: data.id,
            }}
            key={data.id}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
