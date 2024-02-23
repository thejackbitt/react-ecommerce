

export default function Cart({ cart, setCart }) {
  // Function to handle purchase
  const handlePurchase = () => {
    if (window.confirm("Are you sure you want to complete the purchase?")) {
      setCart([]); // clear cart after purchase
      // handle updating product quantities
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} - {item.qty}
          </li>
        ))}
      </ul>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
}
