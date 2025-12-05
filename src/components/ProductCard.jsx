import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-xl"
      />

      <h3 className="mt-3 text-lg font-semibold line-clamp-1">
        {product.title}
      </h3>

      <p className="text-gray-500 text-sm line-clamp-2">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-3">
        <p className="text-xl font-bold text-green-600">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
}
