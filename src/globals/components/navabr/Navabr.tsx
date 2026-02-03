// src/components/Navbar/Navbar.tsx
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ["Home", "Shop", "Categories", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-xl z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-extrabold bg-gradient-to-r from-amber-400 via-red-600 to-indigo-700 bg-clip-text text-transparent">
          Murim
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item) => (
            <li key={item}>
              <a href="#" className="text-lg hover:text-amber-400 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <button className="hover:text-amber-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* User */}
          <button className="hover:text-amber-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          {/* Cart */}
          <button className="relative hover:text-amber-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden hover:text-amber-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <ul className="container mx-auto px-4 py-6 space-y-6 text-center">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-xl hover:text-amber-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
