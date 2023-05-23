import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { AddPage, Home, LoginPage, Product, Products, ProfilPage } from "./pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { productActions } from "./store/products/product.slice";
import { PNF } from "./pages/PNF";


function App() {
  let dispatch = useDispatch();
  useEffect(()=>{
    axios
      .get("https://fakestoreapi.com/products")
      .then((json) => dispatch(productActions.setProduct(json)));
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-product" element={<AddPage />} />
      <Route path="/product/:productID" element={<Product />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilPage />} />
      <Route path="*" element={<PNF/>} />
    </Routes>
  );
}

export default App;
