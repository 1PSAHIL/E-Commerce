import React from "react";

export default function CartDrawer({
  showCart,
  setShowCart,
  cart,
  removeFromCart,
}) {
  if (!showCart) return null;

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-2xl p-5 overflow-y-auto z-50">
      {/* Close */}
      <button
        onClick={() => setShowCart(false)}
        className="absolute top-3 right-3 bg-red-500 text-white text-lg w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-red-600"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-4 mt-8">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="mb-4 border-b pb-3">
            <h3 className="font-semibold">{item.title}</h3>
            <p>Qty: {item.qty}</p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-2 text-red-600 underline"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
