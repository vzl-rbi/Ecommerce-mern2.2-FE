import React from "react";
import Navbar from "../../globals/components/navabr/Navabr";
import HeroSection from "../../globals/components/hero/HeroSection";
import FeaturedProducts from "../../globals/components/featured/Featuredproducts";
import {
  categories,
  featuredProducts,
  testimonials,
} from "../../data/constants";
import CategoriesSection from "../../globals/components/categories/CategoriesSections";
import PromoBanner from "../../globals/components/promoBanner/PromonoBanner";
import TestimonialsSection from "../../globals/components/testimonials/TestimonialsSection";
import Footer from "../../globals/components/footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <CategoriesSection categories={categories} />
      <PromoBanner />
      <TestimonialsSection testimonials={testimonials} />
      <Footer />
    </div>
  );
};

export default Home;
