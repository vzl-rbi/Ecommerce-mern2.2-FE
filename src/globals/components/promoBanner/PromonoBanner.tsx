// src/components/PromoBanner/PromoBanner.tsx
import React from "react";

const PromoBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-900 to-indigo-900">
      <div className="container mx-auto px-4 text-center">
        <p className="text-3xl md:text-4xl font-bold mb-6">
          Free Shipping on Orders Over $75
        </p>
        <a
          href="#"
          className="inline-block bg-amber-400 text-gray-900 hover:bg-amber-300 px-10 py-4 rounded-lg text-xl font-semibold transition transform hover:scale-105"
        >
          Limited Time Offer
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
