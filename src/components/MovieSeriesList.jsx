import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const MovieSeriesList = () => {
  const { result } = useContext(GlobalContext);

  if (result.length === 0) {
    return <p>Nessun risultato trovato</p>;
  }

  return (
    <ul className="list-unstyled">
      {result.map((item) => (
        <li key={`${item.type}-${item.id}`} className="mb-3">
          <h4>{item.title}</h4>
          <p>Titolo Originale: {item.originalTitle}</p>
          <p>Lingua: {item.language}</p>
          <p>Voto: {item.vote}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieSeriesList;
