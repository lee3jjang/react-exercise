import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useState } from "react";
import { TUser } from "../../types";

type Props = {
  setResults: React.Dispatch<React.SetStateAction<TUser[]>>;
};

export const SearchBar = ({ setResults }: Props) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={handleChange}
      />
    </div>
  );

  function fetchData(value: string) {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter(
          (user: TUser) => value && user.name?.toLowerCase().includes(value)
        );
        setResults(results);
      });
  }

  function handleChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setInput(value);
    fetchData(value);
  }
};
