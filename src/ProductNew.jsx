import axios from "axios";

export function ProductNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create Product");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

  return (
    <div id="products-new" className="form">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            Product Name: <input type="text" name="name" />
          </p>
        </div>
        <div>
          <p>
            Description: <input type="text" name="description" />
          </p>
        </div>
        <div>
          <p>
            Price: <input type="text" name="price" />
          </p>
        </div>
        <div>
          <p>
            Inventory: <input type="text" name="inventory" />
          </p>
        </div>
        <div>
          <p>
            Supplier: <input type="text" name="supplier_id" />
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
}
