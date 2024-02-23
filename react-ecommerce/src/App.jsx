import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import storedb from './storeDB.json'

function App() {
  const [count, setCount] = useState(0)
  const [product, setProduct] = useState(storedb)
  const [cart, setCart] = useState([])

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Product
              products={products}
              setCart={setCart}
            />   
          </div>
        </div>
      </div>
    </>
  );
}
