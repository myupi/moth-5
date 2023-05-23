import { Tabs } from "antd";
import "./Additional.scss"
import { More } from "../More/More";
const items = [
  {
    key: "1",
    label: `Просмотренные`,
    children: <More />,
  },
  {
    key: "2",
    label: `Выбор редакции`,
    children: <More rating={true} />,
  },
  {
    key: "3",
    label: `Сниженные цены`,
    children: <More price={true}/>,
  },
];

export function Additional() {
  return (
    <section id="Additional">
      <div className="container">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </section>
  );
}
