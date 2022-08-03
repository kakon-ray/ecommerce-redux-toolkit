import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartsItems: [],
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
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartsItems.push(tempProduct);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
