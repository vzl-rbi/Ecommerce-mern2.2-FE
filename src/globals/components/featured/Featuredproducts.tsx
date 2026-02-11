import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../../store/productSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const FeaturedProducts = () => {
  const dispatch = useAppDispatch();
  const { status, products } = useAppSelector((state) => state.products);
  useEffect(() => {
    if (status === "idle") {
      //Only fetch when status is "idle".
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  console.log(products);
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-amber-600">Featured</span>{" "}
          <span className="text-cyan-900">Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products &&
            products.length > 0 &&
            products.map((pd) => <ProductCard key={pd.id} product={pd} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
