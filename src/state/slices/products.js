import { createSlice } from "@reduxjs/toolkit";

const Products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProductData(state, action) {
      return action.payload;
    },
  },
});

export const ProductActions = Products.actions;
export default Products;
