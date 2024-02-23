import { useState, useEffect } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart"; // Ensure this is imported
import storeDb from "./storeDb.json";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [products, setProducts] = useState(storeDb);
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial load
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <div className="container">
        <div className="row">
          <Products products={products} cart={cart} setCart={setCart} />
          <Cart cart={cart} setCart={setCart} />
        </div>
      </div>
    </>
  );
}
