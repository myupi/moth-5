import { Link } from "react-router-dom";

export function PNF() {
  return (
    <section className="bg-white" style={{ height: "100vh" }}>
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center gap-2">
          <h1>PAGE NOT FOUND</h1>
          <button className="btn btn-primary"><Link to={"/"}>Home page</Link></button>
        </div>
      </div>
    </section>
  );
}
