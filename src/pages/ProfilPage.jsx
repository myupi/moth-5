import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Profile } from "../components/Profile/Profile";

export function ProfilPage(){
  return (
    <>
      <Header />
      <Profile />
      <Footer show={false}/>
    </>
  );
}