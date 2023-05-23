import { NavLink } from "react-bootstrap";
import "../login/Login.scss";
import axios from "axios";
export function LoginLeft() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let { loginEmail, loginPassword } = evt.target.elements;
    axios
      .post("https://reqres.in/api/login", {
        email: loginEmail.value.trim(),
        password: loginPassword.value.trim(),
      })
      .then((response) => {
        if (response.data.token){
          localStorage.setItem("TOKEN", response.data.token);
          window.location.href = "/";
          localStorage.setItem("user", loginEmail.value.trim());
        }
      }).catch((err)=>{
        alert("Error")
      });
  };
  return (
    <div className="loginLeft">
      <div className="loginLeft_form">
        <div className="loginLeft_form-head">
          <h2>ЛОГИН</h2>
        </div>
        <form onSubmit={handleSubmit} className="form d-flex flex-column">
          <label htmlFor="loginEmail" id="loginEmail">
            Введите email или номер телефона
          </label>
          <input
            type="text"
            name="loginEmail"
            id="loginEmail"
            placeholder="eve.holt@reqres.in"
          />
          <label htmlFor="loginPassword" id="loginPassword">
            Пароль
          </label>
          <input
            type="text"
            id="loginPassword"
            name="loginPassword"
            placeholder="***********"
          />
          <button>Войти</button>
        </form>
        <div className="loginRecover">
          <div className="loginRecover-or">
            <p>или</p>
          </div>
          <NavLink>Восстоновить ваше пароль</NavLink>
        </div>
      </div>
    </div>
  );
}
