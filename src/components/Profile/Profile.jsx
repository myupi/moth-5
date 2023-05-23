import { Tabs } from "antd";
import { ProfileTable } from "../ProfileTable";
import { AiFillPlusCircle } from "react-icons/ai";


export function Profile() {
  const LogOut = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("user");
    window.location.href = "/"
  };
  let user = localStorage.getItem('user');
  const items = [
    {
      key: "1",
      label: `Объявления`,
      children: <ProfileTable />,
    },
    {
      key: "2",
      label: `Сообщения`,
      children: <ProfileTable />,
    },
    {
      key: "3",
      label: `Платежи и счёт `,
      children: <ProfileTable />,
    },
    {
      key: "4",
      label: `Настройки`,
      children: (
        <div style={{minHeight: "52.2vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <button className="btn btn-primary" onClick={LogOut}>
            Log Out
          </button>
        </div>
      ),
    },
    {
      key: "5",
      label: `Мой бизнес`,
      children: <ProfileTable />,
    },
  ];
  return (
    <section className="bg-white pb-5">
      <div className="profile container">
        <div className="profileName">
          <h5>Здравствуйте {user}</h5>
          <div className="profileName-button">
            <p className="m-0">Ваш счет: 2 3000 сум</p>
            <button>
              <AiFillPlusCircle />
              Пополнить
            </button>
          </div>
        </div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </section>
  );
}
