import { Link } from "react-router";
import "./Header.css";

const Header = ({ onLogoClick }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box flex">
          <Link to={"/"} className="header-logo flex" onClick={onLogoClick}>
            <img src="/img/books-logo.svg" alt="logo" />
            <span>Grab&Read</span>
          </Link>
          <div className="header-controls flex">
            <Link to={"aboutme"}>
              <button className="btn btn-secondary">Обо мне</button>
            </Link>
            <a href="mailto:example@email.com" className="btn btn-primary">
              Оставить заявку на книгу
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
