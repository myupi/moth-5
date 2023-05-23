import { Radio, Upload } from "antd";
import { useState } from "react";
import "./Form.scss";
import { Uppload } from "../Uppload/Uppload";

const LocationRadio = [
  "В городе",
  "Вдоль трассы",
  "В дачном массиве",
  "В пригороде",
  "Возле водоема, реки",
  "На закрытой территории",
  "В сельской местности",
  "В предгорьях",
];
const StateRadio = [
  "Авторский проект",
  "Требует ремонта",
  "Черновая отделка",
  "Средний ремонт",
  "Предчистовая отделка",
  "Под снос",
  "Евроремонт",
  "Не достроен",
];
const HeatingRadio = [
  "Центральное",
  "На жидком топлив",
  "Без отопления",
  "На газе",
  "Электрическое",
  "На твердом топливе",
  "Смешанное",
];

export function Form() {
  const [Location, setLocation] = useState(1);
  const [State, setState] = useState(1);
  const [Heating, setHeating] = useState(1);
  const [fileList, setFileList] = useState([]);
  const onLocation = (e) => {
    setLocation(e.target.value);
  };
  const onState = (e) => {
    setState(e.target.value);
  };
  const onHeating = (e) => {
    setHeating(e.target.value);
  };
  const Submit = (evt) => {
    evt.preventDefault();
    let {
      price,
      name,
      countRooms,
      liveSquare,
      allSquare,
      floor,
      height,
      square,
      type,
      electricity,
      city,
      region,
      phone,
      email,
    } = evt.target.elements;
    let data = {
      price: price.value,
      negotiable: false,
      house: {
        allSquare: allSquare.value,
        square: square.value,
        liveSquare: liveSquare.value,
        countRooms: countRooms.value,
        location: Location,
        state: State,
        floor: floor.value,
        height: height.value,
        haeting: Heating,
        type: type.value,
        electricity: electricity.value,
        photos: fileList,
      },
      adress: {
        city: city.value,
        region: region.value,
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2379.5780479285972!2d69.20639414087005!3d41.285351246564424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1684847046087!5m2!1sru!2s",
      },
      phone: phone.value,
      email: email.value,
      name: name.value,
    };
    console.log(data);
    alert("Added")
  };
  return (
    <section className="bg-white py-5">
      <form
        style={{ width: "700px", margin: "0 auto" }}
        id="add"
        action="/"
        onSubmit={Submit}
      >
        <div className="d-flex align-items-center mb-3 gap-5 w-100">
          <div className="d-flex flex-column w-25">
            <h6>Цена</h6>
            <input type="number" required name="price" />
          </div>
          <div className="d-flex flex-column w-25">
            <h6>Общая площадь* м²</h6>
            <select>
              <option value="Сум">Сум</option>
            </select>
          </div>
          <div className="d-flex w-25 gap-3">
            <input type="checkbox" name="check" />
            <h6>Жилая площадь м²</h6>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3 gap-5 w-100">
          <div className="d-flex flex-column w-25">
            <h6>Количество комнат*</h6>
            <input type="number" required name="countRooms" />
          </div>
          <div className="d-flex flex-column w-25">
            <h6>Общая площадь* м²</h6>
            <input type="number" required name="allSquare" />
          </div>
          <div className="d-flex flex-column w-25">
            <h6>Жилая площадь м²</h6>
            <input type="number" required name="liveSquare" />
          </div>
        </div>
        <div className="py-4">
          <h6>Расположение*</h6>
          <Radio.Group
            onChange={onLocation}
            value={Location}
            className="d-flex flex-wrap gap-3"
          >
            {LocationRadio.map((item, index) => (
              <Radio
                value={item}
                key={index}
                style={{ width: "30%", color: "black" }}
              >
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <div className="d-flex align-items-center mb-3 gap-5 w-100">
          <div className="d-flex flex-column w-25">
            <h6>Этажность дома*</h6>
            <input type="number" required name="floor" />
          </div>
          <div className="d-flex flex-column w-25">
            <h6>Высота потолков</h6>
            <input type="number" required name="height" />
          </div>
          <div className="d-flex flex-column w-25">
            <h6>Площадь участка*</h6>
            <input type="number" required name="square" />
          </div>
        </div>
        <div className="py-4">
          <h6>Состояние дома</h6>
          <Radio.Group
            onChange={onState}
            value={State}
            className="d-flex flex-wrap gap-3 my-3"
          >
            {StateRadio.map((item, index) => (
              <Radio
                value={item}
                key={index}
                style={{ width: "30%", color: "black" }}
              >
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <div className="d-flex align-items-center mb-3 gap-5">
          <div>
            <h6>Тип дома</h6>
            <select name="type">
              <option value="Коттедж">Коттедж</option>
            </select>
          </div>
          <div>
            <h6>Электричество</h6>
            <select name="electricity">
              <option value="Есть возможность подключения">
                Есть возможность подключения
              </option>
            </select>
          </div>
        </div>
        <div className="py-4">
          <h6>Отопление</h6>
          <Radio.Group
            onChange={onHeating}
            value={Heating}
            className="d-flex flex-wrap gap-3 my-3"
          >
            {HeatingRadio.map((item, index) => (
              <Radio
                value={item}
                key={index}
                style={{ width: "30%", color: "black" }}
              >
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <div className="pb-4 ps-3">
          <Uppload fileList={fileList} setFileList={setFileList} />
        </div>
        <div className="d-flex align-items-center mb-3 gap-5">
          <div>
            <h6>Регион</h6>
            <select name="city">
              <option value="Ташкент">Ташкент</option>
            </select>
          </div>
          <div>
            <h6>Город / Район</h6>
            <select name="region">
              <option value="Мирза Улугбекский район">
                Мирза Улугбекский район
              </option>
            </select>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2379.5780479285972!2d69.20639414087005!3d41.285351246564424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1684847046087!5m2!1sru!2s"
          width="100%"
          height="450"
          style={{ border: "1px solid black" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="d-flex flex-column">
          <div>
            <h5>Телефонный номер</h5>
            <input type="number" defaultValue={"998"} required name="phone" />
          </div>
          <div>
            <h5>Email-адрес</h5>
            <input type="email" placeholder="Email..." required name="email" />
          </div>
          <div>
            <h5>Контактный лицо</h5>
            <input type="text" placeholder="Имя..." name="name" required />
          </div>
        </div>
        <div className="buttons d-flex align-items-center gap-5 mt-5">
          <button className="btn1">Добавить обьявления бесплатно</button>
          <button className="btn2" type="button">Предпросмотр</button>
        </div>
      </form>
    </section>
  );
}
