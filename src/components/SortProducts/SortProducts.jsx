import { SearchOutlined } from "@ant-design/icons";
import "./SortProduct.scss";
import { Casscader } from "../Cascader";
import { Slidder } from "../Slider";

export function SortProduct() {
  return (
    <section
      style={{
        background: "white",
        borderBottom: "1px solid rgba(151, 151, 151, 0.393739)",
        paddingBottom: "20px",
      }}
    >
      <div className="container py-2">
        <div className="w-100 position-relative">
          <input
            type="search"
            placeholder="Введите название обявления или выберите из списка"
            className="w-100"
            style={{
              height: "50px",
              paddingInline: "40px",
              borderRadius: "6px",
              border: "1px solid rgba(151, 151, 151, 0.496575)",
            }}
          />
          <SearchOutlined
            style={{
              fontSize: "40px",
              color: "#DADADA",
              top: "5px",
              left: "5px",
            }}
            className="position-absolute"
          />
        </div>
        <div className="d-flex align-items-center gap-3 py-2 names">
          <p>Интерсное</p>
          <p>Топ</p>
          <p>Отличные предложение</p>
          <p>Супер цена</p>
          <p>г.Ташкент</p>
          <p>г.Термез</p>
          <p>г.Самарканд</p>
        </div>
        <div
          className="cascader d-flex align-items-center py-2"
          style={{ gap: "50px" }}
        >
          <p style={{ fontWeight: "700", fontSize: "15px", color: "#787993" }}>
            Вы сейчас в рубрике
          </p>
          <Casscader />
        </div>
        <div
          className="cascader d-flex align-items-center py-2"
          style={{ gap: "40px" }}
        >
          <p
            style={{
              fontWeight: "700",
              fontSize: "15px",
              color: "#787993",
              width: "190px",
            }}
          >
            Выберите цену от и до
          </p>
          <Slidder />
        </div>
        <div className="selection d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <select name="" id="">
              <option value="Состояние">Состояние</option>
            </select>
            <select name="" id="">
              <option value="Тип объявщика">Тип объявщика</option>
            </select>
            <select name="" id="">
              <option value="Тип объявщика">
                Ташкент {">"} Мирза улугбекский район
              </option>
            </select>
          </div>
          <button>Применить</button>
        </div>
      </div>
    </section>
  );
}
