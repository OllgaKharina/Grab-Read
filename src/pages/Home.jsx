import ProductList from "../components/ProductList/ProductList";
import { useOutletContext } from "react-router-dom";
import PageNotFound from "./PageNotFound";

const Home = () => {
  const { products, resetSearch, isSearchExecuted } = useOutletContext();

  const isSearchEmpty = isSearchExecuted && products.length === 0;

  return (
    <>
      {isSearchEmpty ? (
        <PageNotFound resetSearch={resetSearch} />
      ) : (
        <>
          <h2 className="content__main-title">
            {isSearchExecuted ? "Результаты поиска" : "Книги в наличии"}
          </h2>
          <ProductList />
          {isSearchExecuted && (
            <button
              className="btn btn-secondary back-btn"
              onClick={resetSearch}
            >
              Назад
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Home;
