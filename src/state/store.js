import { configureStore } from "@reduxjs/toolkit";
import Products from "./slices/products";
const store = configureStore({
  reducer: {
    product: Products.reducer,
  },
});

export default store;
