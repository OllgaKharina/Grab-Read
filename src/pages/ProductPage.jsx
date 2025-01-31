import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import "../styles/index.css";

const ProductPage = () => {
  const { id } = useParams();
  const { products, resetSearch } = useOutletContext();
  const navigate = useNavigate();
  const product = products.find((card) => card.id === parseInt(id));

  if (!product) {
    return <h2>Продукт не найден</h2>;
  }

  return (
    <>
      <h2 className="content__main-title">{product.title}</h2>
      <div className="single-card__wrap flex">
        <img
          className="single-card__img"
          src={product.img}
          alt={product.title}
        />
        <div className="single-card__descr flex">
          <p className="single-card__text">{product.descr}</p>
          <span className="single-card__price">{product.price}</span>
          <div className="single-card__details flex">
            <a
              href="mailto:example@email.com"
              className="btn btn-primary card-btn"
            >
              Написать
            </a>
            <a href="tel:+1234567890" className="btn btn-primary card-btn">
              Позвонить
            </a>
          </div>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          resetSearch();
          navigate(-1); // Возврат на предыдущую страницу
        }}
      >
        Назад
      </button>
    </>
  );
};

export default ProductPage;
