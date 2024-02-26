export default function Products(props) {

  function addToCart(product){
    const newProduct = {...product, qty:1}
    props.setCart([...props.cart, newProduct])
    console.log(props.cart);
}

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
              <td><button onClick={() => addToCart(product)}>Add To Cart</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
