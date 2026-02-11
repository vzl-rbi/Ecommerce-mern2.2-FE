import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductState, ProductStatus } from "../globals/components/types/productTypes";

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
    setStatus(state, action: PayloadAction<ProductStatus>) {
      state.status = action.payload
    }

  }
})
export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer