import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Cards from "./Card";

const MovieSeriesList = () => {
  const { result } = useContext(GlobalContext);

  if (result.length === 0) {
    return <p>Nessun risultato trovato</p>;
  }

  return (
    <ul className="list-unstyled row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 p-4 bg-dark m-0">
      {result.map((item) => (
        <Cards key={`${item.type}-${item.id}`} item={item} />
      ))}
    </ul>
  );
};

export default MovieSeriesList;
