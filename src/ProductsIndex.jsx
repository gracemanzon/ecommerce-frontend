export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div className="all-products">
        {props.products.map((product) => (
          <div key={product.id} className="card custom-card">
            <h5 className="card-title">{product.name}</h5>
            <img src={product.images[0]?.url} alt="" />
            <p></p>
            <button onClick={() => props.onSelectProduct(product)} className="btn btn-primary">
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
