import { ProductLeft } from "../ProductLeft";
import { ProductRight } from "../ProductRight";
import "./Products.scss";

export function ProductsPage({ product }) {
  return (
    <section style={{ background: "white" }}>
      <div className="container">
        <div className="products-links">
          <span>
            Объявления / Ташкент Недвижимость / Ташкент Квартиры / Ташкент
            Продажа / Новостройки Ташкент
          </span>
        </div>
        <div className="productsHead">
          <h2>{product.title}</h2>
        </div>
        <div className="pt-2 d-flex gap-4 align-align-items-start w-100">
          <ProductLeft url={product.image} />
          <ProductRight product={product} />
        </div>
      </div>
    </section>
  );
}
