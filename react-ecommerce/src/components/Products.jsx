export default function Products(props) {
  return (
    <>
      <table>
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

//   Acme Widget 2000  $10     Qty of 10  id: 1
//   Acme Widget 5000  $50     Qty of 20  id: 2
//   Acme Widget 8000  $100    Qty of 5   id: 3
