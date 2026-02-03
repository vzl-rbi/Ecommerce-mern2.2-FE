// src/components/Featured/FeaturedProducts.tsx
import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  keyword: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured Items
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
