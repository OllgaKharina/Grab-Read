import { Link } from "react-router";

import "./ProductCard.css";

const ProductCard = ({ id, img, title, author, price }) => {
  return (
    <Link to={`product/${id}`}>
      <div className="card">
        <img className="card-img" src={img} alt={title} />
        <div className="card-desc-box flex">
          <h5 className="card-title">{title}</h5>
          <span className="card-desc">{author}</span>
          <span className="card-price">
            <strong>{price}</strong>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
