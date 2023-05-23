import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

export function SwipperProduct({ rating }) {
  let select = useSelector((store) => store.products.product.data);
  let [product, setProduct] = useState(select);
  useEffect(() => {
    const newArr = [...select].sort((a, b) => a.rating.rate - b.rating.rate);
    if (rating) {
      setProduct(newArr);
    }
  }, [rating, select]);

  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        navigation
        className={"px-5 py-3"}
      >
        {product.map((product, i) => {
          return (
            <SwiperSlide key={i}>
              <Link to={`/product/${product.id}`}>
                <Card
                  url={product.image}
                  title={product.title}
                  price={product.price}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
