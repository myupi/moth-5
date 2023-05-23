import LoginImg from "../../assets/images/loginPage-img2.png"
import "../login/Login.scss";

export function LoginRight() {
  return (
    <div className="loginRight">
      <div className="loginRight-how">
        <img src={LoginImg} alt="" />
      </div>
    </div>
  );
}
