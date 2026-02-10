import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  // console.log(user?.token); //user ko token yasari access garne
  const [isLooggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token || !!user?.token);
  }, [user?.token]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-amber-400 via-red-500 to-indigo-600 bg-clip-text text-transparent"
        >
          MURIM
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-l-xl bg-gray-800 text-white focus:outline-none"
          />
          <button className="px-4 bg-amber-500 text-black rounded-r-xl font-medium hover:bg-amber-400">
            Search
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-lg">
          <li>
            <Link to="/shop" className="hover:text-amber-400 transition">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/categories" className="hover:text-amber-400 transition">
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="relative hover:text-amber-400 transition"
            >
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {!isLooggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500 hover:text-black transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={handleLogout}
                className="px-4 py-2 border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500 hover:text-black transition"
              >
                Log out
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
