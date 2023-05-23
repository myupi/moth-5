import blackLogo from "../../assets/images/BlackLogo.svg"
import appStore from "../../assets/images/appStore.svg"
import googlePlay from "../../assets/images/googlePlay.svg";
import "./Footer.scss"

export function Footer({show = true}){
  return (
    <>
      <section id="footerTop">
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <div className="left d-flex align-items-center gap-2">
            <img src={blackLogo} alt="" />
            <p className="d-inline-block w-50">
              Продай, найди, купи все что ты пожелаешь{" "}
            </p>
          </div>
          <p className="d-inline-block w-25">
            Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
            обяления
          </p>
          <div className="logos d-flex align-items-center gap-2">
            <img src={appStore} alt="" />
            <img src={googlePlay} alt="" />
          </div>
        </div>
      </section>
      {show && (
        <section id="footerBottom">
          <div className="container d-flex justify-content-between py-4">
            <div className="one d-flex flex-column gap-3">
              <ul>
                <h5>Автомобили</h5>
                <li>Легковые авто</li>
                <li>Мото</li>
                <li>Автобусы</li>
                <li>Грузовые авто</li>
                <li>Сельхозтехника</li>
                <li>Запчасти и Акссесуры</li>
                <li>Прицепы и спецтехника</li>
                <li>Водный и другой транспорта</li>
              </ul>
              <ul>
                <h5>Дом и сад</h5>
                <li>Товары для интерьера</li>
                <li>Товары для сада</li>
                <li>Растения</li>
                <li>Продукты и питания</li>
                <li>Посуда и куханная утварь</li>
                <li>Хоз.инвентарь и Бытовая химия</li>
                <li>Концтовары и Расходные</li>
                <li>Прочие товары для дома</li>
              </ul>
            </div>
            <div className="one d-flex flex-column gap-3">
              <ul>
                <h5>Недвижимость</h5>
                <li>Аренда квартир</li>
                <li>Аренда домов</li>
                <li>Аренда гаражей и стоянок</li>
                <li>Продажа квартир</li>
                <li>Продажа домов</li>
                <li>Продажа земли</li>
                <li>Продажа горажей/Стоянок</li>
                <li>Аренда помещений</li>
                <li>Прочая недвижимость</li>
                <li>Обмен недвижимости</li>
                <li>Коммерческая недвижимость</li>
              </ul>
              <ul>
                <h5>Товары стройки и ремонта</h5>
                <li>Двери и окна</li>
                <li>Сантехника</li>
                <li>Стройматериалы</li>
                <li>Инструменты</li>
              </ul>
            </div>
            <div className="one d-flex flex-column gap-3">
              <ul>
                <h5>Личные вещи</h5>
                <li>Одежда, обувь, аксессуары</li>
                <li>Детская одежда и обувь</li>
                <li>Школьникам</li>
                <li>Часы и украшения</li>
                <li>Товары для красоты и здоровья</li>
                <li>Разные вещи</li>
              </ul>
              <ul>
                <h5>Бизнес и услуги</h5>
                <li>Сырьё и материалы</li>
                <li>Оборудования и аренда</li>
                <li>Производства и обработка</li>
                <li>Продажа бизнеса и партнерство</li>
                <li>Финансовые услуги/Бухгалтерия</li>
                <li>Услуги для красоты и здоровья</li>
                <li>Услуги курьера и доставки</li>
                <li>Реклама, Полиграфия и Маркетинг</li>
                <li>Няни, Сиделки и Домработницы</li>
              </ul>
            </div>
          </div>
          <div className="container d-flex align-items-center justify-content-between py-4 bottom">
            <p className="d-inline-block">Подать объявление</p>
            <p className="d-inline-block">Объявление</p>
            <p className="d-inline-block">Магазины</p>
            <p className="d-inline-block">Помощь</p>
            <p className="d-inline-block">Безопасность</p>
            <p className="d-inline-block">Реклама на сайте</p>
            <p className="d-inline-block">О компании</p>
          </div>
        </section>
      )}
    </>
  );
}