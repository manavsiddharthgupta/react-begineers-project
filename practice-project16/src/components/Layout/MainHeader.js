import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reducerCart } from "../../store/CartStore";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const tt = useSelector((state) => state.totalItem);
  const onSetshowcart = () => {
    dispatch(reducerCart.onsetShowcart());
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={onSetshowcart} totalItem={tt} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
