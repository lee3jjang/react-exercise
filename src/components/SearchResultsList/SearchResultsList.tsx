import { TUser } from "../../types";
import { SearchResult } from "../SearchResult/SearchResult";
import "./SearchResultsList.css";

type Props = { results: TUser[] };

export const SearchResultsList = ({ results }: Props) => {
  return (
    <div className="results-list">
      {results.map((result, index) => (
        <SearchResult key={index} result={result} />
      ))}
    </div>
  );
};
