import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <HeaderWrapper>
      <IoMdAdd className="addListButton" />

      <BsMoonStarsFill
        className="darkModeToggle"
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      />

      <FaUser className="loginButton" />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 65px;
  color: var(--color-white);
  font-size: 3rem;
  gap: 10px;
  cursor: pointer;

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
