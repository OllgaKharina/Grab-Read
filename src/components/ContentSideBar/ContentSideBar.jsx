import Footer from "../Footer/Footer";
import "./ContentSideBar.css";
import "../../styles/media.css";

const ContentSideBar = () => {
  return (
    <div className="content-side flex">
      <div className="content-side__wrap">
        <h3 className="content-side__title">Дополнительные услуги</h3>
        <ul className="content-side__list flex">
          <li className="content-side__item">
            <h5 className="content-side-item__title">Обмен книгами</h5>
            <p className="content-side__descr">
              Приносите свои книги, а&nbsp;взамен выбирайте новые из&nbsp;нашего
              ассортимента.
            </p>
          </li>
          <li className="content-side__item">
            <h5 className="content-side-item__title">
              Персональные рекомендации
            </h5>
            <p className="content-side__descr">
              Расскажите о своих любимых жанрах и авторах, а я подберу для вас
              интересные книги.
            </p>
          </li>
          <li className="content-side__item">
            <h5 className="content-side-item__title">
              Подарочная упаковка и&nbsp;сертификаты
            </h5>
            <p className="content-side__descr">
              Хотите сделать подарок близким? У нас есть подарочные сертификаты,
              чтобы ваши близкие сами выбрали&nbsp;то, что им&nbsp;по&nbsp;душе.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ContentSideBar;
