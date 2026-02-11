import type { Product } from "../types/productTypes";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    productName,
    productDescription,
    productPrice,
    productTotalStockQty,
    image,
    User,
  } = product;

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:scale-105">
      {/* Product Image */}
      <img src={image} alt={productName} className="w-full h-60 object-cover" />

      <div className="p-5">
        {/* Name */}
        <h3 className="text-xl font-semibold mb-1">{productName}</h3>

        {/* Seller */}
        {/* <p className="text-sm text-gray-400 mb-2">Sold by {User?.userName}</p> */}

        {/* Description */}
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {productDescription}
        </p>

        {/* Price + Stock */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-amber-400">
            Rs. {productPrice}
          </span>

          <span className="text-sm text-gray-400">
            Stock: {productTotalStockQty}
          </span>
        </div>

        {/* Button */}
        <button
          disabled={productTotalStockQty === 0}
          className="w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded-lg font-semibold transition disabled:opacity-50 cursor-pointer"
        >
          {productTotalStockQty === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
