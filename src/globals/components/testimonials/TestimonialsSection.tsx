// src/components/Testimonials/TestimonialsSection.tsx
import React from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  quote: string;
  name: string;
  avatarSig: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Voices from the Realm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
