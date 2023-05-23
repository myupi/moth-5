import { Link } from "react-router-dom";
import "./Card.scss"

export function Card({url, title, price}){
  return (
      <div className="product-card">
        <img
          src={url}
          alt=""
        />
        <h2>{title}</h2>
        <p>Вчера 22:55</p>
        <h3>{price} $</h3>
      </div>
  );
}