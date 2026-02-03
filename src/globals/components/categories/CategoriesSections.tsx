// src/components/Categories/CategoriesSection.tsx
import React from "react";
import CategoryCard from "./CategoryCard";

interface Category {
  name: string;
  keyword: string;
}

interface CategoriesSectionProps {
  categories: Category[];
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
}) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
