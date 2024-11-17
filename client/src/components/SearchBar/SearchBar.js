import { BiSearch } from "react-icons/bi";
import "./searchBar.css";

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className="searchbar">
      <BiSearch className="searchbar__icon" size={24} />
      <input
        className="searchbar__input"
        type="search"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
