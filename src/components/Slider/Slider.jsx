import { Slider } from "antd";

export function Slidder () {
  return (
    <>
      <Slider
        range
        className="w-100"
        max={4_000_000}
        min={0}
        defaultValue={[1_000_000, 2_000_000]}
      />
    </>
  );
};

