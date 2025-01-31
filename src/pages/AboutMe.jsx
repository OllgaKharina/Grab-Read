import { useNavigate, useOutletContext } from "react-router-dom";
import "../styles/index.css";

const AboutMe = () => {
  const navigate = useNavigate();
  const { resetSearch } = useOutletContext();

  return (
    <>
      <h2 className="content__main-title">Об авторе проекта</h2>
      <div className="about-container flex">
        <img
          className="about-img"
          src="/img/about-img.png"
          alt="Автор проекта"
        />
        <p className="about-text">
          Добро пожаловать в уютный уголок книгомана! 🌿 Если вы ищете
          вдохновение для чтения или хотите подарить книге новую жизнь —
          заглядывайте! Я продаю прочитанные книги, чтобы они продолжали
          радовать других. Давайте вместе создавать круговорот историй в мире!
        </p>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          resetSearch();
          navigate(-1);
        }}
      >
        Назад
      </button>
    </>
  );
};

export default AboutMe;
