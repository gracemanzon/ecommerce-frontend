import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsIndex } from "./ProductsIndex";
import { ProductNew } from "./ProductNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";

export function Home() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleCreateProduct = (params) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      const newProduct = response.data;
      setProducts([...products, newProduct]);
    });
  };

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
      <Logout />
      <ProductNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} onSelectProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleHideProduct}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </div>
  );
}
