import ProfileImg from "../../assets/images/profile-img.svg";
import { BsArrowUpCircleFill, BsThreeDots } from "react-icons/bs";
import "../Profile/Profile.scss";
export function ProfileTable() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Фото</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Дата</th>
            <th>Действие</th>
          </tr>
          <tr>
            <td>
              <img src={ProfileImg} alt="" />
            </td>
            <td>Срочно нужен программист yii2</td>
            <td>
              <span>2 000 000</span>
              <br />
              <span>6 000 000 сум</span>
            </td>
            <td>
              <span># 345 002 </span> <br />
              <span>С: 28 июнь </span>
              <br />
              <span>По: 28 июль</span>
            </td>
            <td>
              <button>
                <BsArrowUpCircleFill /> Поднять
              </button>
              <button>
                <BsArrowUpCircleFill /> Рекламировать
              </button>
              <button>
                <BsThreeDots />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={ProfileImg} alt="" />
            </td>
            <td>Срочно нужен программист yii2</td>
            <td>
              <span>2 000 000</span>
              <br />
              <span>6 000 000 сум</span>
            </td>
            <td>
              <span># 345 002 </span> <br />
              <span>С: 28 июнь </span>
              <br />
              <span>По: 28 июль</span>
            </td>
            <td>
              <button>
                <BsArrowUpCircleFill /> Поднять
              </button>
              <button>
                <BsArrowUpCircleFill /> Рекламировать
              </button>
              <button>
                <BsThreeDots />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={ProfileImg} alt="" />
            </td>
            <td>Срочно нужен программист yii2</td>
            <td>
              <span>2 000 000</span>
              <br />
              <span>6 000 000 сум</span>
            </td>
            <td>
              <span># 345 002 </span> <br />
              <span>С: 28 июнь </span>
              <br />
              <span>По: 28 июль</span>
            </td>
            <td>
              <button>
                <BsArrowUpCircleFill /> Поднять
              </button>
              <button>
                <BsArrowUpCircleFill /> Рекламировать
              </button>
              <button>
                <BsThreeDots />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={ProfileImg} alt="" />
            </td>
            <td>Срочно нужен программист yii2</td>
            <td>
              <span>2 000 000</span>
              <br />
              <span>6 000 000 сум</span>
            </td>
            <td>
              <span># 345 002 </span> <br />
              <span>С: 28 июнь </span>
              <br />
              <span>По: 28 июль</span>
            </td>
            <td>
              <button>
                <BsArrowUpCircleFill /> Поднять
              </button>
              <button>
                <BsArrowUpCircleFill /> Рекламировать
              </button>
              <button>
                <BsThreeDots />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={ProfileImg} alt="" />
            </td>
            <td>Срочно нужен программист yii2</td>
            <td>
              <span>2 000 000</span>
              <br />
              <span>6 000 000 сум</span>
            </td>
            <td>
              <span># 345 002 </span> <br />
              <span>С: 28 июнь </span>
              <br />
              <span>По: 28 июль</span>
            </td>
            <td>
              <button>
                <BsArrowUpCircleFill /> Поднять
              </button>
              <button>
                <BsArrowUpCircleFill /> Рекламировать
              </button>
              <button>
                <BsThreeDots />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
