import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../globals/components/types/cartTypes";
import type { Status } from "../globals/components/types/types";
import type { AppDispatch } from "./store";
import { APIAuthenticate } from "../http";
const initialState: CartState = {
  items: [],
  status: "idle"  
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers : {
    setItems(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload
    },
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload
    }

  }
})
export const {setItems, setStatus} = cartSlice.actions
export default cartSlice.reducer

export function addToCart(productId: string) {
  return async function addToCartThunk(dispatch: AppDispatch) {
    dispatch(setStatus("loading"))
    try {
      const res = await APIAuthenticate.post('customer/cart/', { productId, quantity : 1})
      if(res.status === 200) {
        dispatch(setStatus("success"))
        dispatch(setItems(res.data.data))

      } else {
        dispatch(setStatus("fail"))
      }
    } catch (error) {
      dispatch(setStatus("error"))
      console.log("Error", error)
      
    }
  }
} 