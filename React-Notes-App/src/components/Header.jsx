import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";

const Header = ({ handleToggleDarkMode, handleAddNoteList }) => {
  return (
    <HeaderWrapper>
      <IoMdAdd
        className="addListButton"
        onClick={() => {
          handleAddNoteList();
        }}
      />

      <BsMoonStarsFill
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
  font-size: 3rem;
  gap: 10px;
  cursor: pointer;
  z-index: 999;

  & :hover {
    scale: 1.1;
    transition-timing-function: linear;
    transition-duration: 1s;
  }

  & svg {
    margin-right: 5px;
  }

  & .addListButton:hover {
  }

  & .darkModeToggle:hover {
  }

  & .loginButton:hover {
  }
`;
