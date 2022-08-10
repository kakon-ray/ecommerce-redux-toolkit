import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartsItems: JSON.parse(localStorage.getItem("cartItem"))
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalquantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const findIndex = state.cartsItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex >= 0) {
        state.cartsItems[findIndex].cartQuantity += 1;
        toast(`Incresing cartlist ${action.payload.name}`);
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartsItems.push(tempProduct);
        toast.success(`Add to cartlist ${action.payload.name}`);
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartsItems));
    },
    removeToCart(state, action) {
      const deleteAfterCartItems = state.cartsItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartsItems = deleteAfterCartItems;
      localStorage.setItem("cartItem", JSON.stringify(state.cartsItems));
      toast.error(`Deleted Items ${action.payload.name}`);
    },
    decreassCartQuantity(state, action) {
      state.cartsItems.map((item) => {
        if (action.payload.item.id === item.id) {
          console.log(action.payload.item.id, item.id);
          item.cartQuantity = action.payload.currentCartQuantity;
        }
      });
      localStorage.setItem("cartItem", JSON.stringify(state.cartsItems));
      toast.success(`Update  ${action.payload.item.name}`);
    },
    clearToCart(state, action) {
      state.cartsItems = [];
      localStorage.setItem("cartItem", JSON.stringify(state.cartsItems));
      toast.error(`Clear All Cart`);
    },
  },
});

export const { addToCart, removeToCart, decreassCartQuantity, clearToCart } =
  cartSlice.actions;
export default cartSlice.reducer;
