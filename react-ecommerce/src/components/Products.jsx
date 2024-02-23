export default function Products(props) {
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
          {props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.qty}</td>
              <td><button onClick={() => props.setCart([...cart, product])}>Add to Cart</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
