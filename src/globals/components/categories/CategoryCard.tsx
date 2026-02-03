// src/components/Categories/CategoryCard.tsx
import React from "react";

interface Category {
  name: string;
  keyword: string;
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <a
      href="#"
      className="relative rounded-xl overflow-hidden group transition transform hover:scale-105"
    >
      <img
        src={`https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/09/best-murim-manhwa.jpg?w=1600&h=1200&fit=crop?${category.keyword},dark`}
        alt={category.name}
        className="w-full h-80 object-cover group-hover:brightness-75 transition"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
      <h3 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-amber-400">
        {category.name}
      </h3>
    </a>
  );
};

export default CategoryCard;
