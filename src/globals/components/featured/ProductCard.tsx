// src/components/Featured/ProductCard.tsx
import React from "react";

interface Product {
  name: string;
  price: string;
  oldPrice?: string;
  rating: number;
  keyword: string;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < fullStars ? "text-amber-400" : "text-gray-600"}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-400">{rating}</span>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { name, price, oldPrice, rating, keyword } = product;

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
      <img
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrq3_dTrl9XNerTzstYq8cOtVaZWWlocmvDw&s${keyword}`}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-amber-400">{price}</span>
            {oldPrice && (
              <span className="ml-3 text-lg text-gray-500 line-through">
                {oldPrice}
              </span>
            )}
          </div>
        </div>
        <StarRating rating={rating} />
        <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg font-semibold transition transform hover:scale-105">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
