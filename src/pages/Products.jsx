import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Interesting } from "../components/Interesting";
import { NowSearch } from "../components/NowSearch";
import { ShowMoreProduct } from "../components/ShowMoreProduct";
import { SortProduct } from "../components/SortProducts";

export function Products(){
  return (
    <>
      <Header setsort={false} />
      <SortProduct />
      <section style={{ background: "white", paddingTop: "20px" }}>
        <div className="container py-2">
          <Cards />
        </div>
      </section>
      <NowSearch />
      <Interesting/>
      <Footer />
    </>
  );
}