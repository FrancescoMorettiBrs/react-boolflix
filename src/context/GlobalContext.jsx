import { children, createContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [searchTermSubmit, setSearchTermSubmit] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);
  

  const fetchResult = () => {
    if (!searchTermSubmit.trim()) return;

    const apiMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=it-IT&query=${searchTermSubmit}`;

    const apiTvSeriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=it-IT&query=${searchTermSubmit}`;

    axios.get(apiMovieUrl).then((movieResp) => {
      const movies = movieResp.data.results.map((item) => ({
        id: item.id,
        title: item.title,
        originalTitle: item.original_title,
        language: item.original_language,
        vote: item.vote_average,
        poster: item.poster_path,
        type: "movie",
      }));

      axios.get(apiTvSeriesUrl).then((tvSeriesResp) => {
        const tvSeries = tvSeriesResp.data.results.map((item) => ({
          id: item.id,
          title: item.name,
          originalTitle: item.original_name,
          language: item.original_language,
          vote: item.vote_average,
          poster: item.poster_path,
          type: "tv",
        }));

        setResult([...movies, ...tvSeries]);
      });
    });
  };

  useEffect(() => {
    if (!searchTermSubmit.trim()) return;
    fetchResult();
  }, [searchTermSubmit]);

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        setSearchTermSubmit,
        result,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
