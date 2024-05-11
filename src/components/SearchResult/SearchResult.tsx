import { TUser } from "../../types";
import "./SearchResult.css";

type Props = {
  result: TUser;
};

export const SearchResult = ({ result: { name } }: Props) => {
  return (
    <div className="search-result" onClick={handleClick}>
      {name}
    </div>
  );

  function handleClick() {
    alert(`You clicked on ${name}`);
  }
};
