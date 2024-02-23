import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Products'
import Cart from './components/Cart'
import storedb from './storeDB.json'

function App() {
  const [count, setCount] = useState(0)
  const [product, setProduct] = useState(storedb)
  const [cart, setCart] = useState(null)

  return (
    <>
    </>
  );
}
