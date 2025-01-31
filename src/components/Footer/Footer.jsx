import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer flex">
      <p className="footer-item">
        &copy;&nbsp;ИП&nbsp;Грин А.А., 2011&ndash;2025
      </p>
      <a href="#" className="footer-link">
        Политика конфиденциальности
      </a>
      <a href="#" className="footer-link">
        Обработка данных
      </a>
    </div>
  );
};

export default Footer;
