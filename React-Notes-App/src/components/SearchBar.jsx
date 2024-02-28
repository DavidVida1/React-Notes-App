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
    background-color: var(--color-white);
    border-radius: var(--b-radius1);
    padding: 5px;
    margin-bottom: 1rem;
  }

  &.search input {
    border: none;
    background-color: var(--color-white);
    width: 100%;
  }

  &.search input:focus {
    outline: none;
  }
`;
