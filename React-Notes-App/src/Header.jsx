import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderWrapper>
      <IoMdAdd className="addListButton" />

      <BsMoonStarsFill className="darkMode" />

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
  color: var(--color-black);
  font-size: 3rem;
  gap: 10px;
  cursor: pointer;

  & svg {
    margin-right: 5px;
  }

  & .addListButton {
    border: 3px solid black;
    border-radius: 10px;

    &:hover {
      background-color: var(--color-black);
      color: var(--color-white);
    }
  }

  & .darkMode:hover {
    color: var(--color-white);
  }

  .loginButton:hover {
    color: var(--color-white);
  }
`;
