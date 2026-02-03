// src/components/Footer/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const quickLinks = ["Home", "Shop", "Categories", "About", "Contact"];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">
              Murim
            </h3>
            <p className="text-gray-400">
              Discover exclusive artifacts, weapons, and elixirs crafted for
              those who seek true power in the realm.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-amber-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Customer Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 transition"
              />
              <button className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          © 2026 Murim. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
