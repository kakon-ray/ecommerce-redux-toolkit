import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/CartSlice";
import { productsApi } from "./features/productsApi";
import ProductsReducer, { productsFetch } from "./features/ProductSlice";

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productsFetch());

export default store;
