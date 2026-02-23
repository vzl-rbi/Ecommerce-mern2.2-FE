import { createSlice } from "@reduxjs/toolkit";
import type { CartState } from "../globals/components/types/cartTypes";
const initialState: CartState = {
  items: [],
  status: "idle"  
}

createSlice({
  name: 'cart',
  initialState,
  reducers : {

  }
})