import { BiSearch } from "react-icons/bi";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <BiSearch className="searchbar__icon" size={24} />
      <input className="searchbar__input" type="search" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
