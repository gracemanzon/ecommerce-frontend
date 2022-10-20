export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      {props.products.map((product) => (
        // <div key={product.id} className="card" style="width: 18rem;">
        //   <img src="..." className="card-img-top" alt="..." />
        //   <div className="card-body">
        //     <h5 className="card-title">{product.name}</h5>
        //     <p className="card-text">
        //       Some quick example text to build on the card title and make up the bulk of the card's content.
        //     </p>
        //     <a href="#" className="btn btn-primary">
        //       Go somewhere
        //     </a>
        //   </div>
        // </div>
        <div key={product.id} className="card">
          <h5 className="card-title">{product.name}</h5>
          <img src={product.images[0]?.url} alt="" />
          <p></p>
          <button onClick={() => props.onSelectProduct(product)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
