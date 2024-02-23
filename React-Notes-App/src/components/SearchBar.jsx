import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearchNote }) => {
  return (
    <SearchBarContainer className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Search..."
      />
    </SearchBarContainer>
  );
};
export default SearchBar;

const SearchBarContainer = styled.section`
  &.search {
    display: flex;
    align-items: center;
    background-color: rgb(233, 233, 233);
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 1.5em;
  }

  &.search input {
    border: none;
    background-color: rgb(233, 233, 233);
    width: 100%;
  }

  &.search input:focus {
    outline: none;
  }
`;
