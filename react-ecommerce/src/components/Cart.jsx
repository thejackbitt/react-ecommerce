export default function Cart(props) {

const cartEmpty = !props.cart || props.cart.length === 0;

    return (
      <>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
        {!cartEmpty ? (
          props.cart.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.name}</td>
              <td>{cart.price}</td>
              <td>{cart.qty}</td>
            </tr>
          ))
        ) : (
        <tr colSpan="3">Your cart is empty.        
        </tr>
        )}
        </tbody>
      </table>
      </>  
    );
}