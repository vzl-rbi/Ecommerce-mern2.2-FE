// src/components/Hero/HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "ur[](https://source.unsplash.com/random/1920x1080/?dark,fantasy,warrior)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Unleash Your Power
        </h1>
        <p className="text-xl md:text-3xl mb-10 text-gray-300">
          Exclusive collection – up to 50% off
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#"
            className="bg-red-700 hover:bg-red-600 px-10 py-5 rounded-lg text-xl font-semibold transition transform hover:scale-105"
          >
            Shop Now
          </a>
          <a
            href="#"
            className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-10 py-5 rounded-lg text-xl font-semibold transition transform hover:scale-105"
          >
            Explore Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
