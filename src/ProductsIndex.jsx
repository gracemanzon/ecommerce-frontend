import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="products-index">
      Search filter:{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names" />
      <datalist id="names">
        {props.products.map((product) => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      <div className="all-products">
        {props.products
          .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((product) => (
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
