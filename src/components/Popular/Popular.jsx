import Apple from "../../assets/images/Apple.svg"
import Back from "../../assets/images/Back.svg";
import Chair from "./../../assets/images/Chair.svg"
import "./Popular.scss"

export function Popular(){
  return (
    <section id="Popular">
      <div className="container d-flex align-items-center justify-content-between py-5 gap-3">
        <div className="flex d-flex flex-column box">
          <h3>Техника Apple по доступным ценам</h3>
          <span>987 обьявлениий</span>
          <img src={Apple} alt="" />
        </div>
        <div className="flex d-flex flex-column box">
          <h3>Брендовые товары за копейки</h3>
          <span>987 обьявлениий</span>
          <img src={Back} alt="" />
        </div>
        <div className="flex d-flex flex-column box">
          <h3>Все товары для офиса в одном месте</h3>
          <span>987 обьявлениий</span>
          <img src={Chair} alt="" />
        </div>
      </div>
    </section>
  );
}