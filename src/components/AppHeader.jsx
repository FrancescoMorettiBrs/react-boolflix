import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AppHeader = () => {
  const { search, setSearch, setSearchTermSubmit } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setSearchTermSubmit(search);
    }
  };

  return (
    <header>
      <div className="header p-3 d-flex">
        <div>
          <h1 className="logo m-0 text-danger">BoolFlix</h1>
          <form onSubmit={handleSubmit} className="d-flex gap-2 my-4 w-100 w-md-auto">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cerca un film/serie" className="form-control" />
            <button type="submit" className="btn btn-primary">
              Cerca
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
