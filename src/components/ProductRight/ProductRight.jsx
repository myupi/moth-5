import "./ProductRight.scss";

export function ProductRight({ product }) {
  return (
    <div className="productRight">
      <div className="productRight-top d-flex justify-content-between">
        <p>Артикул: 4418970</p>
        <p>обновлено: 28.04.17 добавлено: 28.04.17 </p>
      </div>
      <div className="productRight_payment">
        <div className="productRight_payment-price">
          <h3>{product.price} $</h3>
          <span>Ташкент, Ташкентская область, Юнусабадский район </span>
        </div>
        <div className="productRight_payment-cards">
          <div className="productRight_payment-card d-flex mb-2 justify-content-between">
            <h6>
              99891 166<sub>****</sub>
            </h6>
            <button>Покозать польностю</button>
          </div>
          <div className="productRight_payment-card d-flex justify-content-between">
            <h6>
              99891 166<sub>****</sub>
            </h6>
            <button>Покозать польностю</button>
          </div>
        </div>
        <div className="productRight_payment-author d-flex gap-1 align-items-center">
          <p className="m-0">Автор обьявлении: </p>
          <h6 className="m-0">Зухриддин Темиров</h6>
        </div>
        <div className="productRight_payment-contact d-flex gap-2 mt-4">
          <button>Написать автору</button>
          <button>Предложить свою цену</button>
        </div>
      </div>
      <div className="productRight-table">
        <table>
          <tbody>
            <tr>
              <td>
                Количество комнат:
                <p className="table-text">6</p>
              </td>
              <td>
                Общая площадь:
                <p className="table-text">40 м2</p>
              </td>
              <td>
                Этаж:
                <p className="table-text">32</p>
              </td>
            </tr>
            <tr>
              <td>
                Этажность дома:
                <p className="table-text">6</p>
              </td>
              <td>
                Состояние квартиры:
                <p className="table-text">Первая сдача </p>
              </td>
              <td>
                Этаж:
                <p className="table-text">32</p>
              </td>
            </tr>
            <tr>
              <td>
                Планировка
                <p className="table-txt">Раздельная</p>
              </td>
              <td>
                Год постройки/сдачи
                <p className="table-txt">Сдача в 2017</p>
              </td>
              <td>
                Ремонт
                <p className="table-text">Авторский проект</p>
              </td>
            </tr>
            <tr>
              <td>
                Санузел
                <p className="table-txt">2 санузела и более</p>
              </td>
              <td>
                Меблирована
                <p className="table-txt">Да</p>
              </td>
              <td>
                Высота потолков
                <p className="table-text">32</p>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p className="m-0 table-text"> Рядом есть</p>
                <p className="table-txt">
                  Больница, поликлиника, Детская, площадка, Детский сад,
                  Остановки, Парк, зелёная зона, Развлекательные заведения,
                  Рестораны, кафе
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="productRight_content mt-3">
        <div className="productRight_content-text">
          <p>{product.description}</p>
          <p className="mt-4">{product.description}</p>
        </div>
        <div className="productRight_content-views d-flex align-items-center">
          <h6 className="my-0" style={{ marginRight: "150px" }}>
            Просмотры:{product.rating.count}
          </h6>
          <p className="m-0">Пожаловатся</p>
        </div>
      </div>
    </div>
  );
}
