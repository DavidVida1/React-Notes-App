import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Header = ({ handleToggleDarkMode, handleAddNoteList }) => {
  return (
    <HeaderWrapper>
      <IoMdAdd
        className="addListButton"
        onClick={() => {
          handleAddNoteList();
        }}
      />

      <FaMoon
        className="darkModeToggle"
        onClick={() => {
          handleToggleDarkMode();
        }}
      />

      <FaUser className="loginButton" />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 65px;
  color: var(--color-white);
  font-size: var(--font-size2);
  cursor: pointer;
  z-index: 999;

  & :hover {
    filter: drop-shadow(0 0 3px var(--color-white));
    transition-timing-function: linear;
    transition-duration: 0.3s;
  }

  & svg {
    margin-right: 15px;
  }

  & .addListButton:hover {
  }

  & .darkModeToggle:hover {
  }

  & .loginButton:hover {
  }
`;
