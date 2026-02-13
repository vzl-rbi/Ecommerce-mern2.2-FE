import type React from "react";
import Navbar from "../../globals/components/navabr/Navabr";
import { Link, useParams } from "react-router-dom";
import Footer from "../../globals/components/footer/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchByProductId } from "../../store/productSlice";
const SingleProduct: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  // console.log(id);
  const { status, singleProduct } = useAppSelector((state) => state.products);
  useEffect(() => {
    if (id) {
      dispatch(fetchByProductId(id));
    }
  }, []);
  console.log(singleProduct);
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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative">
            <img
              src={singleProduct?.image}
              alt={singleProduct?.productName}
              className="w-full rounded-xl shadow-2xl object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {singleProduct?.productName}
            </h1>

            {/* Price & Stock */}
            <div className="flex items-center gap-6 text-2xl">
              <span className="font-bold text-amber-400">
                Rs. {singleProduct?.productPrice.toLocaleString()}
              </span>
              <span className="text-gray-400">
                Stock: {singleProduct?.productTotalStockQty}
              </span>
            </div>

            {/* Description */}
            <div className="text-gray-300 text-lg leading-relaxed">
              <p>{singleProduct?.productDescription}</p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6 mt-4">
              <span className="text-lg font-medium">Quantity:</span>
              <div className="flex items-center border border-gray-700 rounded-lg">
                <button className="px-5 py-3 hover:bg-gray-800 transition">
                  -
                </button>
                <span className="px-8 py-3 text-lg font-medium">
                  {singleProduct?.productTotalStockQty}
                </span>
                <button className="px-5 py-3 hover:bg-gray-800 transition">
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              disabled={singleProduct?.productTotalStockQty === 0}
              className="mt-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:cursor-not-allowed py-4 rounded-lg font-bold text-xl transition transform hover:scale-105 active:scale-95"
            >
              {singleProduct?.productTotalStockQty === 0
                ? "Out of Stock"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;
