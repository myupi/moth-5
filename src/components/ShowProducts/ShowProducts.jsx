import { Tabs } from "antd";
import "./ShowProducts.scss";
import { Cards } from "../Cards";


const items = [
  {
    key: "1",
    label: `Новые объявления`,
    children: <Cards />,
  },
  {
    key: "2",
    label: `Лучщие предложение`,
    children: <Cards rating={true} />,
  },
];
export function ShowProducts() {
  return (
    <section id="ShowProducts">
      <div className="container">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </section>
  );
}
