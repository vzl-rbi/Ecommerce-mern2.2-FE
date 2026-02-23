import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../globals/components/types/cartTypes";
import type { Status } from "../globals/components/types/types";
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