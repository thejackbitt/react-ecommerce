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
              <td>
                <span onClick={() => props.setCart([...cart, product])}>{product.name}</span>
              </td>
              <td>{product.price}</td>
              <td>{product.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
