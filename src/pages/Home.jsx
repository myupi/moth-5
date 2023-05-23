import { Header } from "../components/Header";
import { Swipper } from "../components/Swiper";
import { ShowProducts } from "../components/ShowProducts";
import { Popular } from "../components/Popular";
import { Additional } from "../components/Additional";
import { useEffect } from "react";
import { Footer } from "../components/Footer";

export function Home(){
  document.title = "Kiwi | Home";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header/>
      <Swipper/>
      <ShowProducts/>
      <Popular/>
      <Additional/>
      <Footer/>
    </>
  )
}