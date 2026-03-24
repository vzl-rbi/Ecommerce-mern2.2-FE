import type { Status } from "./types";

export interface CartProduct {
  id: string;
  productName: string;
  productDescription: string;
  productPrice: string;
  productTotalStockQty: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  Category: {
    id: string;
    categoryName: string;
  };
}

export interface CartItem {
  id: string;           // ✅ added
  quantity: number;
  productId: string;    // ✅ added
  userId: string;       // ✅ added
  createdAt: string;    // ✅ added
  updatedAt: string;    // ✅ added
  Product: CartProduct; // ✅ capital P to match API
}

export interface CartState {
  items: CartItem[];
  status: Status;
}
// import type { Product } from "./productTypes";
// import type { Status } from "./types";
// export interface CartItem {
//   product: Product;
//   quantity : number
// }

// export interface CartState {
//   items : CartItem[];
//   status: Status
// }