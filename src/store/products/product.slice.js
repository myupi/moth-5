import { createSlice } from "@reduxjs/toolkit";


export const {actions: productActions, reducer: productReducer} = createSlice({
  name: "product",
  initialState: {
    product: localStorage.getItem("product") && JSON.parse(localStorage.getItem("product"))
  },
  reducers: {
    setProduct: (state, {payload}) => {
      state.product = payload
      localStorage.setItem("product", JSON.stringify(payload))
    }
  }
})