import "./SearchField.css";

const SearchField = ({ searchText, onSearchChange, onSearchSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit();
  };

  return (
    <section className="search">
      <div className="container">
        <form className="search-box flex" onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={onSearchChange}
            placeholder="Введите запрос..."
          />
          <button className="search-btn flex" type="submit">
            <img
              className="search-btn__icon"
              src={`${import.meta.env.BASE_URL}img/search.svg`}
              alt="search"
            />
            <span className="search-btn-text">Найти</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchField;
