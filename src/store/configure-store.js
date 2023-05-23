import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./products/product.slice";

export const store = configureStore({
  reducer: {
    products: productReducer
  }
})