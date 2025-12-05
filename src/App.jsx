import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "./utils/api";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [showCart, setShowCart] = useState(false);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch products
  useEffect(() => {
    fetchAllProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  // Filters
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  // Add to cart
  function addToCart(product) {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      return exist
        ? prev.map((p) =>
            p.id === product.id ? { ...p, qty: p.qty + 1 } : p
          )
        : [...prev, { ...product, qty: 1 }];
    });
  }

  // Remove
  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function logout() {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  }

  if (!loggedIn) return <Login setLoggedIn={setLoggedIn} />;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        query={query}
        setQuery={setQuery}
        cart={cart}
        logout={logout}
        setShowCart={setShowCart}
      />

      {loading && (
        <p className="text-center mt-10 text-lg font-semibold animate-pulse">
          Loading products...
        </p>
      )}

      <ProductGrid filtered={filtered} addToCart={addToCart} />

      <CartDrawer
        showCart={showCart}
        setShowCart={setShowCart}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
