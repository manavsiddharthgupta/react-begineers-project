import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCart = {
  cartItem: [],
  showCart: false,
  totalItem: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addCart(state, action) {
      let itemExist = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (!itemExist) {
        state.cartItem.push({
          title: action.payload.title,
          price: action.payload.price,
          id: action.payload.id,
          qty: action.payload.qty,
        });
      } else {
        let itemIndx = state.cartItem.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cartItem[itemIndx].qty = +state.cartItem[itemIndx].qty + 1;
      }
      state.totalItem = state.totalItem + 1;
    },
    incrementItem(state, action) {
      let itemIndx = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      state.cartItem[itemIndx].qty = +state.cartItem[itemIndx].qty + 1;
      state.totalItem = state.totalItem + 1;
    },
    decrement(state, action) {
      let itemIndx = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      if (+state.cartItem[itemIndx].qty >= 2) {
        state.cartItem[itemIndx].qty = +state.cartItem[itemIndx].qty - 1;
      } else {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload
        );
      }
      state.totalItem = state.totalItem - 1;
    },
    onsetShowcart(state) {
      state.showCart = !state.showCart;
    },
  },
});

const CartStore = configureStore({ reducer: cartSlice.reducer });

export const reducerCart = cartSlice.actions;

export default CartStore;
