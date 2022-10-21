import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsIndex } from "./ProductsIndex";
import { ProductNew } from "./ProductNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";

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
      <Signup />
      <Login />
      <ProductNew />
      <ProductsIndex products={products} onSelectProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleHideProduct}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </div>
  );
}
