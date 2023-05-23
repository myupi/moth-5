import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function NowSearch() {
  return (
    <section style={{ background: "white" }} className="py-2">
      <div className="container">
        <h2 style={{ color: "#414D6A", fontSize: "20px" }}>СЕЙЧАС ИЩУТ</h2>
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4.3}
            loop={true}
            className={"px-5 py-3"}
            style={{ borderInline: "1px solid rgba(151, 151, 151, 0.356686)" }}
          >
            <SwiperSlide className="d-flex flex-column">
              <p style={{ fontWeight: "700", color: "#4E72CA" }}>
                Купить мясные продукции
              </p>
              <span style={{ fontWeight: "500", color: "#AAAAB6" }}>
                2 часа назад
              </span>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column">
              <p style={{ fontWeight: "700", color: "#4E72CA" }}>
                Купить мясные продукции
              </p>
              <span style={{ fontWeight: "500", color: "#AAAAB6" }}>
                2 часа назад
              </span>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column">
              <p style={{ fontWeight: "700", color: "#4E72CA" }}>
                Купить мясные продукции
              </p>
              <span style={{ fontWeight: "500", color: "#AAAAB6" }}>
                2 часа назад
              </span>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column">
              <p style={{ fontWeight: "700", color: "#4E72CA" }}>
                Купить мясные продукции
              </p>
              <span style={{ fontWeight: "500", color: "#AAAAB6" }}>
                2 часа назад
              </span>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column">
              <p style={{ fontWeight: "700", color: "#4E72CA" }}>
                Купить мясные продукции
              </p>
              <span style={{ fontWeight: "500", color: "#AAAAB6" }}>
                2 часа назад
              </span>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column">
              <p style={{ fontWeight: "700", color: "#4E72CA" }}>
                Купить мясные продукции
              </p>
              <span style={{ fontWeight: "500", color: "#AAAAB6" }}>
                2 часа назад
              </span>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column">
              <p style={{ fontWeight: "700", color: "#4E72CA" }}>
                Купить мясные продукции
              </p>
              <span style={{ fontWeight: "500", color: "#AAAAB6" }}>
                2 часа назад
              </span>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column">
              <p style={{ fontWeight: "700", color: "#4E72CA" }}>
                Купить мясные продукции
              </p>
              <span style={{ fontWeight: "500", color: "#AAAAB6" }}>
                2 часа назад
              </span>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column">
              <p style={{ fontWeight: "700", color: "#4E72CA" }}>
                Купить мясные продукции
              </p>
              <span style={{ fontWeight: "500", color: "#AAAAB6" }}>
                2 часа назад
              </span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
