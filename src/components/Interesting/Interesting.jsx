import { SwipperProduct } from "../SwipeProduct";
import "./Interesting.scss"

export function Interesting() {
  return (
    <section className="bg-white py-3">
      <div className="container interesting">
        <h2 style={{ fontSize: "20px", fontWeight: "700", color: "#41D481" }}>
          САМОЕ ИНТЕРЕСНОЕ
        </h2>
        <SwipperProduct />
      </div>
    </section>
  );
}
