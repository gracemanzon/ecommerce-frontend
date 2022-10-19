export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.images[0]?.url} alt="" />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.inventory}</p>
          <button onClick={() => props.onSelectProduct(product)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
