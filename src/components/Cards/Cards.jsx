import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";
import "./Cards.scss";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
export function Cards({ rating, className }) {
  let select = useSelector(store => store.products.product.data)
  let [product, setProduct] = useState(select);
  const [show, setShow] = useState(false);
  const handleShowMore = () => {
    setShow(!show);
  };
  useEffect(() => {
    const newArr = [...select].sort((a, b) => a.rating.rate - b.rating.rate);
    if (rating) {
      setProduct(newArr);
    }
  }, [rating, select]);

  return (
    <>
      <div
        className={
          !show
            ? "cards d-flex align-items-center justify-content-between gap-4 flex-wrap maxHeight"
            : "cards d-flex align-items-center justify-content-between gap-4 flex-wrap"
        }
      >
        {product.map((product, i) => {
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
