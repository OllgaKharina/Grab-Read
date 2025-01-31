import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

const ProductList = () => {
  const { products } = useOutletContext();

  return (
    <>
      <ul className="content-main__list">
        {products.map((card) => (
          <li className="content-main__list-item" key={card.id}>
            <ProductCard
              id={card.id}
              img={card.img}
              title={card.title}
              author={card.author}
              price={card.price}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
