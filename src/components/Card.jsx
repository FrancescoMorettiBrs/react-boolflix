const Cards = ({ item }) => {
  const getCountryCodeFromLanguage = (language) => {
    const map = {
      en: "us",
      ja: "jp",
      ko: "kr",
      zh: "cn",
    };
    return map[language] || language;
  };

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
    <li className="mb-3 col card-style">
      <div className="movie-card">
        <img src={getPosterUrl(item.poster)} alt={item.title} className="card-img-top" />
        <div className="overlay">
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
          <p className="overview">{item.overview}</p>
        </div>
      </div>
    </li>
  );
};

export default Cards;
