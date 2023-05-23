import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { ProductsPage } from "../components/ProductsPage";
import { ShowMoreProduct } from "../components/ShowMoreProduct";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Footer } from "../components/Footer";

export function Product(){
  let {productID} = useParams();
  let select = useSelector((store) => store.products.product.data);
  let findProduct = select.find((product) => product.id == productID);
  document.title = "Product"
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productID]);
  return (
    <>
      <Header setsort={true} />
      <ProductsPage product={findProduct} />
      <ShowMoreProduct />
      <Footer/>
    </>
  );
}