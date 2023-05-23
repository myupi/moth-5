import { Tabs } from "antd";
import { Cards } from "../Cards";
import { SwipperProduct } from "../SwipeProduct";

const items = [
  {
    key: "1",
    label: `Похожие объявления`,
    children: <SwipperProduct />,
  },
  {
    key: "2",
    label: `Обьявление автора`,
    children: <SwipperProduct rating={true}/>,
  },
];
export function ShowMoreProduct(){
  
  return (
    <>
      <section id="ShowProducts">
        <div className="container">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </section>
    </>
  );
}

