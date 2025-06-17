import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const getCountryCodeFromLanguage = (lang) => {
  const map = {
    en: "us",
    ja: "jp",
    ko: "kr",
    zh: "cn",
  };
  return map[lang] || lang;
};

const MovieSeriesList = () => {
  const { result } = useContext(GlobalContext);

  if (result.length === 0) {
    return <p>Nessun risultato trovato</p>;
  }

  const getPosterUrl = (path) => {
    return path ? `https://image.tmdb.org/t/p/w342/${path}` : "https://via.placeholder.com/342x513?text=No+Image";
  };

  const renderStars = (vote) => {
    const fullStars = Math.ceil(vote / 2);
    const emptyStars = 5 - fullStars;

    let stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa-solid fa-star text-warning"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fa-regular fa-star text-warning"></i>);
    }

    return stars;
  };

  return (
    <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {result.map((item) => (
        <li key={`${item.type}-${item.id}`} className="mb-3 col">
          <div className="card h-100">
            <img src={getPosterUrl(item.poster)} alt={item.title} className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-text">
                <strong className="subtitle">Titolo Originale:</strong> {item.originalTitle}
              </p>
              <p className="card-text">
                <strong className="subtitle">Lingua: </strong>
                <img src={`https://flagcdn.com/24x18/${getCountryCodeFromLanguage(item.language.toLowerCase())}.png`} alt={item.language} />
              </p>
              <p className="card-text">
                <strong className="subtitle">Voto:</strong> {renderStars(item.vote)}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieSeriesList;
