import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductState } from "../globals/components/types/productTypes";
import type { Status } from "../globals/components/types/types";
import type { AppDispatch } from "./store";
import API from "../http";

const initialState: ProductState = {
  products: null,
  status: "idle"
}
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[] | null>) {
      state.products = action.payload
    },
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload
    }

  }
})
export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer
export const fetchProducts = () => {
  return async (dispatch : AppDispatch) => {
    dispatch(setStatus("loading"))
    try {
      const res = await API.get('admin/product')
      if(res.status === 200) {
        const { data} = res.data  // data: [{}, {}, {}] ==> postman tira herda ni bhayo 
        dispatch(setProducts(data))
        dispatch(setStatus("success"))
      } else {
        dispatch(setStatus("fail"))
      }
    } catch (err) {
      dispatch(setStatus("fail"))
      console.error(err)
      
    }
  }
}