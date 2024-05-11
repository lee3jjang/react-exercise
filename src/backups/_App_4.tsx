import { useState } from "react";
import "./App.css";
import { SearchResultsList, SearchBar } from "./components";
import { TUser } from "./_types_4";

function App() {
  const [results, setResults] = useState<TUser[]>([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default App;
