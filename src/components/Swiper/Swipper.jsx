import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Game from "../../assets/images/Game.svg";
import Airplane from "../../assets/images/Airplane.svg";
import Box from "../../assets/images/Box.svg";
import InMaintenance from "../../assets/images/InMaintenance.svg";
import Mountaints from "../../assets/images/Mountaints.svg";
import Job from "../../assets/images/Job.svg";
import Shape from "../../assets/images/Shape.svg";
import Pc from "../../assets/images/PC.svg";
import Person from "../../assets/images/Person.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Swiper.scss"

export function Swipper() {
  return (
    <div className="container" id="swipper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={9}
        loop={true}
        navigation
        className={"px-5 py-3"}
      >
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Airplane} alt="" />
          <p>Автомобили</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Shape} alt="" />
          <p>Недвижимость</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Pc} alt="" />
          <p>Электроника</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Job} alt="" />
          <p>Работа</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Box} alt="" />
          <p>Личные вещи</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Mountaints} alt="" />
          <p>Дом и Сад</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={InMaintenance} alt="" />
          <p>Стройка и ремонт</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Game} alt="" />
          <p>Хобби и Спорт</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Person} alt="" />
          <p>Бизнес и услуги</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Airplane} alt="" />
          <p>Автомобили</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Shape} alt="" />
          <p>Недвижимость</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Pc} alt="" />
          <p>Электроника</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Job} alt="" />
          <p>Работа</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Box} alt="" />
          <p>Личные вещи</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Mountaints} alt="" />
          <p>Дом и Сад</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={InMaintenance} alt="" />
          <p>Стройка и ремонт</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Game} alt="" />
          <p>Хобби и Спорт</p>
        </SwiperSlide>
        <SwiperSlide className="d-flex flex-column align-items-center justify-content-center gap-2">
          <img src={Person} alt="" />
          <p>Бизнес и услуги</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
