import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Header = () => {
  return (
    <HeaderWrapper>
      <IoMdAdd className="addListButton" />
      <FaUser />
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

  & svg {
    margin-right: 5px;

    &.addListButton {
      border: 3px solid black;
      border-radius: 10px;
    }
  }
`;
