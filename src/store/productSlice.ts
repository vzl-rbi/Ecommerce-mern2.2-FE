import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductState } from "../globals/components/types/productTypes";
import type { Status } from "../globals/components/types/types";
import type { AppDispatch, RootState } from "./store";
import API from "../http";

const initialState: ProductState = {
  products: [],
  status: "idle",
  singleProduct: null
}
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload
    },
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload
    },
    setSingleProduct(state, action:PayloadAction<Product>){
      state.singleProduct = action.payload
    }

  }
})
export const {setProducts, setStatus, setSingleProduct} = productSlice.actions
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
export const fetchByProductId = (productId: string) => {
  return async (dispatch: AppDispatch, getState: ()=> RootState) => {
    const state = getState()
    const existingProduct = state.products.products.find((product:Product) => product.id === productId)
    if(existingProduct) {
      dispatch(setSingleProduct(existingProduct))
      dispatch(setStatus("success"))

    } else {
      try {
      const res = await API.get(`admin/product/${productId}`)
      if(res.status === 200) {
        const { data} = res.data 
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
}