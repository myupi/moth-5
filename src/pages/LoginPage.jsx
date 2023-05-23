import { Header } from "../components/Header";
import { Login } from "../components/login";




export function LoginPage() {
  let token = localStorage.getItem("TOKEN") || false
  if(token){
    window.location.href = "/"
  }
  return (
    <>
      <Header />
      <Login/>
    </>
  );
}
