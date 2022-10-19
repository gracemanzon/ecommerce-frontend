import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsIndex } from "./ProductsIndex";
import { ProductNew } from "./ProductNew";
import { Modal } from "./Modal";

export function Home() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleShowProduct = (product) => {
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleHideProduct = () => {
    setIsProductsShowVisible(false);
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <ProductNew />
      <ProductsIndex products={products} onSelectProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleHideProduct}>
        <h2>{currentProduct.name}</h2>
        <img src={currentProduct.images[0].url} alt="" />
        <p>Description: {currentProduct.description}</p>
        <p>Price: {currentProduct.price}</p>
        <p># In Stock: {currentProduct.inventory}</p>
      </Modal>
    </div>
  );
}
