import { LoginLeft } from "../loginLeft";
import { LoginRight } from "../loginRight";

export function Login() {
  return (
    <section className="bg-white">
      <div className="loginPage container">
        <LoginLeft />
        <LoginRight />
      </div>
    </section>
  );
}
