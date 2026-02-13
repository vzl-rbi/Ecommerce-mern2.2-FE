import type { Status } from "./types";

interface Category {
  id: string;
  categoryName: string
}
interface User {
  id: string;
  email: string;
  userName: string
}
export interface Product {
  id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productTotalStockQty: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  categoryId: string;
  User: User;
  Category: Category;
}
export interface ProductState {
  products: Product[];
  status: Status
  singleProduct : Product | null
}