import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/fetchByIdStatus",
  async () => {
    const responce = await axios.get("http://localhost:5000/products");
    return responce?.data;
  }
);

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "Success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "Faild";
    },
  },
});

export default ProductSlice.reducer;
