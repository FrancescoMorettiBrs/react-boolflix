import MovieSeriesList from "./MovieSeriesList";
import SearchBar from "./SearchBar";

const MainLayout = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Boolflix</h1>
      <SearchBar />
      <MovieSeriesList />
    </div>
  );
};

export default MainLayout;
