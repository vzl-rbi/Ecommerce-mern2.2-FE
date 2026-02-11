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
export type ProductStatus = "idle" | "loading" | "success" | "fail" | "error";
export interface ProductState {
  product: Product[] | null;
  status: ProductStatus
}