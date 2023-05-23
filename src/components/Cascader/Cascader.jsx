import "./Cascader.scss";
import { Cascader } from "antd";
const { SHOW_CHILD } = Cascader;
const options = [
  {
    label: "Light",
    value: "light",
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Электроника",
            value: "Электроника",
          },
          {
            label: "Мониторы",
            value: "Мониторы",
          },
        ],
      },
    ],
  },
];
export function Casscader(){
  return (
    <>
      <Cascader
        style={{
          border: "1px solid rgba(151, 151, 151, 0.496575)",
          borderRadius: "27px",
          height: "54px",
        }}
        className="w-50"
        options={options}
        bordered={false}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ["bamboo", "Электроника", "Электроника"],
          ["bamboo", "Мониторы", "Мониторы"],
        ]}
      />
    </>
  );
};

