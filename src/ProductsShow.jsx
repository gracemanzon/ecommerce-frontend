import axios from "axios";

export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch("http://localhost:3000/products/" + props.product.id + ".json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

  return (
    <div>
      <h1>Product Info</h1>
      <h2>{props.product.name}</h2>
      <img src={props.product.images[0]?.url} alt="" />
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p># In Stock: {props.product.inventory}</p>

      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            Product Name: <input type="text" name="name" defaultValue={props.product.name} />
          </p>
        </div>
        <div>
          <p>
            Description: <input type="text" name="description" defaultValue={props.product.description} />
          </p>
        </div>
        <div>
          <p>
            Price: <input type="text" name="price" defaultValue={props.product.price} />
          </p>
        </div>
        <div>
          <p>
            Inventory: <input type="text" name="inventory" defaultValue={props.product.inventory} />
          </p>
        </div>
        {/* <div>
          <p>
            Image: <input type="text" name="image_url" defaultValue={props.product.image_url} />
          </p>
        </div> */}
        <div>
          <p>
            Supplier ID: <input type="text" name="supplier_id" defaultValue={props.product.supplier_id} />
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
}
