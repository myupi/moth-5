import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import { Sort } from "../Sort";
import { createContext, useState } from "react";
import { AvatarUser } from "../Avatar";

export function Header({ setsort = true }) {
  const [token, setToken] = useState(localStorage.getItem("TOKEN") || false);
  let [sort, setSort] = useState(setsort);
  return (
    <section id="Header">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <div className="left d-flex w-25 align-items-center gap-2">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <span className="w-50">Продай, найди, купи все что пожелаешь…</span>
        </div>
        <ul className="d-flex align-items-center m-0 p-0 gap-3">
          <li>
            <Link to="/products">Объявления</Link>
          </li>
          <li>
            <Link to="/add-product">Магазины</Link>
          </li>
          <li>
            <Link to="/">Для бизнеса</Link>
          </li>
          <li>
            <Link to="/">Помощь</Link>
          </li>
        </ul>
        <div className="language d-flex align-items-center">
          <button>Рус</button>
          <button>O'z</button>
        </div>
        {!token ? (
          <div className="login d-flex align-items-center gap-2">
            <button>
              <Link to="/login">Вход</Link>
            </button>
            <button>Регистрация</button>
          </div>
        ) : (
          <AvatarUser setToken={setToken} />
        )}
      </div>
      {sort && <Sort />}
    </section>
  );
}
