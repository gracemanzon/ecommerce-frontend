export function ProductsShow(props) {
  return (
    <div>
      <h1>Product Info</h1>
      <h2>{props.product.name}</h2>
      <img src={props.product.images[0]?.url} alt="" />
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p># In Stock: {props.product.inventory}</p>
    </div>
  );
}
