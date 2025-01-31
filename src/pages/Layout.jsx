import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SearchField from "../components/SearchField/SearchField";
import ContentSideBar from "../components/ContentSideBar/ContentSideBar";
import "../styles/index.css";
import { cardsArray } from "../constants";

const Layout = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState(cardsArray);
  const [isSearchExecuted, setIsSearchExecuted] = useState(false);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchArray = () => {
    setIsSearchExecuted(true);

    const filteredProducts = cardsArray.filter(
      (product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase()) ||
        product.price.includes(searchText)
    );

    setProducts(filteredProducts);
  };

  const resetSearch = () => {
    setSearchText("");
    setProducts(cardsArray);
    setIsSearchExecuted(false);
  };

  useEffect(() => {
    setProducts(cardsArray);
  }, []);

  return (
    <>
      <Header onLogoClick={resetSearch} />
      <main>
        <SearchField
          searchText={searchText}
          onSearchChange={handleSearch}
          onSearchSubmit={handleSearchArray}
        />
        <section className="content">
          <div className="container content-box flex">
            <div className="content-main">
              <Outlet
                context={{
                  products,
                  searchText,
                  resetSearch,
                  isSearchExecuted,
                }}
              />
            </div>
            <ContentSideBar />
          </div>
        </section>
      </main>
    </>
  );
};

export default Layout;
