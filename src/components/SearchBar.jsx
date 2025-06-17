import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const SearchBar = () => {
  const { search, setSearch, setSearchTermSubmit } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTermSubmit(search);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 my-4">
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cerca un film/serie" className="form-control" />
      <button type="submit" className="btn btn-primary">
        Cerca
      </button>
    </form>
  );
};

export default SearchBar;
