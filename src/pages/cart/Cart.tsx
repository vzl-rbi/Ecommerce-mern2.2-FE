// src/pages/cart/Cart.tsx
import type React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../globals/components/navabr/Navabr";
import Footer from "../../globals/components/footer/Footer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCart } from "../../store/cartSlice";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.carts);

  useEffect(() => {
    dispatch(fetchCart()); // ✅ Load cart on page open
  }, [dispatch]);

  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.Product.productPrice) * item.quantity,
    0,
  );

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p className="text-xl text-gray-400 animate-pulse">Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-amber-400 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-gray-400 text-xl">Your cart is empty.</p>
            <Link
              to="/"
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-semibold transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 bg-gray-900 rounded-xl p-4 items-center"
                >
                  <img
                    src={item.Product.image}
                    alt={item.Product.productName}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">
                      {item.Product.productName}
                    </h2>
                    <p className="text-amber-400 font-bold mt-1">
                      Rs.{" "}
                      {parseFloat(item.Product.productPrice).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-lg">
                    <span className="text-gray-400">Qty:</span>
                    <span className="font-bold">{item.quantity}</span>
                  </div>
                  <div className="text-right font-bold text-lg">
                    Rs.{" "}
                    {(
                      parseFloat(item.Product.productPrice) * item.quantity
                    ).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-gray-900 rounded-xl p-6 h-fit flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Order Summary</h2>
              <div className="flex justify-between text-gray-400">
                <span>Items ({items.length})</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-700 pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-amber-400">
                  Rs. {total.toLocaleString()}
                </span>
              </div>
              <button className="mt-4 bg-indigo-600 hover:bg-indigo-500 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 active:scale-95">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
