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

export function addToCart(productId: string, quantity: number) {
  return async function addToCartThunk(dispatch: AppDispatch) {
    dispatch(setStatus("loading"))
    try {
      const res = await APIAuthenticate.post('customer/cart/', { productId,
      quantity
    })
    // console.log("STATUS:", res.status);
    //   console.log("DATA:", res.data);
      if(res.status === 200 || res.status === 201) {
        // ✅ POST only returns one item, so fetch the full cart
        const cartRes = await APIAuthenticate.get("customer/cart/");
        dispatch(setItems(cartRes.data.data)); // full cart array
        console.log("FULL CART:", cartRes.data);
        dispatch(setStatus("success"))
        // dispatch(setItems(res.data.data))

      } else {
        dispatch(setStatus("fail"))
      }
    } catch (error) {
      dispatch(setStatus("error"))
      console.log("Error", error)
      
    }
  }
} 
// Add this to cartSlice.ts
export function fetchCart() {
  return async function fetchCartThunk(dispatch: AppDispatch) {
    dispatch(setStatus("loading"));
    try {
      const res = await APIAuthenticate.get("customer/cart/");
      if (res.status === 200) {
        dispatch(setItems(res.data.data)); // ✅ matches API shape
        dispatch(setStatus("success"));
      } else {
        dispatch(setStatus("fail"));
      }
    } catch (error) {
      dispatch(setStatus("error"));
      console.log("Error", error);
    }
  };
}