import "./ProductLeft.scss";

export function ProductLeft({url}) {
  return (
    <div className="productLeft d-flex gap-2" style={{ height: "456px" }}>
      <div className="productLeft-images d-flex flex-column justify-content-between">
        <img src="https://picsum.photos/id/188/75" alt="" />
        <img src="https://picsum.photos/id/157/75" alt="" />
        <img src="https://picsum.photos/id/154/75" alt="" />
        <img src="https://picsum.photos/id/242/75" alt="" />
        <img src="https://picsum.photos/id/145/75" alt="" />
      </div>
      <div className="productLeft-image">
        <img src={url} alt="" width={"456px"} height={"456px"}/>
      </div>
    </div>
  );
}
