import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import "./More.scss";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
export function More({ rating, price }) {
  let select = useSelector((store) => store.products.product.data);

  let [product, setProduct] = useState(select);
  const [show, setShow] = useState(false);
  const handleShowMore = () => {
    setShow(!show);
  };
  useEffect(() => {
    let ratingArr = [...select]
      .sort((a, b) => a.rating.count - b.rating.count);
    let priceArr = [...select].sort((a, b) => a.price - b.price);
    rating && setProduct(ratingArr);
    price && setProduct(priceArr);
  }, []);

  return (
    <>
      <div
        className={
          !show
            ? "cards d-flex align-items-center justify-content-between gap-4 flex-wrap maxHeightMore"
            : "cards d-flex align-items-center justify-content-between gap-4 flex-wrap"
        }
      >
        {product.slice(0, 8).map((product, i) => {
          return (
            <Link key={i} to={`/product/${product.id}`}>
              <Card
                url={product.image}
                title={product.title}
                price={product.price}
              />
            </Link>
          );
        })}
      </div>
      <div
        className="w-100 d-flex align-items-center justify-content-center py-3"
        style={{ borderTop: " 1px solid rgba(182, 202, 251, 0.606827)" }}
      >
        <button className="btnShowMore" onClick={handleShowMore}>
          Показать ещё {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
    </>
  );
}
