import { useNavigate } from "react-router";

const PageNotFound = ({ resetSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h2 className="content__main-title">Ничего не найдено</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          resetSearch();
          navigate("/");
        }}
      >
        На главную
      </button>
    </div>
  );
};

export default PageNotFound;
