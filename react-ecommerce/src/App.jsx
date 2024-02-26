import { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import storeDb from "./storeDb.json";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [products, setProducts] = useState(storeDb);
  const [cart, setCart] = useState([]);


  return (
    <>
      <div className="container">
        <div className="row">
          <Products products={products} cart={cart} setCart={setCart}/>
          <Cart products={products} cart={cart}/>
        </div>
      </div>
    </>
  );
}
