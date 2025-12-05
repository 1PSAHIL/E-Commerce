import React from "react";

export default function Navbar({ query, setQuery, cart, logout, setShowCart }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">ShopKart</h1>

        <div className="flex items-center gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 w-72 rounded-xl border border-gray-300 
              focus:ring-2 focus:ring-blue-500 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Cart Button */}
          <button
            onClick={() => setShowCart(true)}
            className="relative px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </button>

          {/* Logout */}
          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
