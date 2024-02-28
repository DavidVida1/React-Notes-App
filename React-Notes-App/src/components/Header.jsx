import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Header = ({ handleToggleDarkMode, handleAddNoteList }) => {
  return (
    <HeaderWrapper>
      <section className="diamonds">
        <IoMdAdd
          id="diamond1"
          onClick={() => {
            handleAddNoteList();
          }}
        />

        <FaMoon
          id="diamond2"
          onClick={() => {
            handleToggleDarkMode();
          }}
        />

        <FaUser id="diamond3" />
      </section>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 110px;
  color: var(--color-white);
  font-size: var(--font-size2);
  z-index: 999;

  .diamonds {
    position: fixed;
    display: flex;
    flex-direction: row;
    color: var(--color-white);
    gap: 7px;
    top: 10px;
    right: 30px;

    #diamond1 {
      width: 25px;
      height: 25px;
      border: 10px solid var(--color-white3);
      background-color: transparent;
      border-radius: 5px;
      rotate: 45deg;
      position: relative;
      top: 45px;
      right: 40px;
      animation: float 5s ease-in-out infinite;
    }

    #diamond2 {
      width: 25px;
      height: 25px;
      border: 10px solid var(--color-white3);
      background-color: transparent;
      border-radius: 5px;
      rotate: 45deg;
      position: relative;
      top: 20px;
      right: 25px;
      animation: float 4s ease-in-out infinite;
    }
    #diamond3 {
      width: 25px;
      height: 25px;
      border: 10px solid var(--color-white3);
      background-color: transparent;
      border-radius: 5px;
      rotate: -45deg;
      position: relative;
      top: 50px;
      right: 15px;
      animation: float 6s ease-in-out infinite;
    }

    & :hover {
      filter: drop-shadow(0 0 3px var(--color-white));
      box-shadow: 0 0 10px var(--color-white);
      transition-timing-function: linear;
      transition-duration: 0.3s;
      cursor: pointer;
    }
    @keyframes float {
      0% {
        transform: translatey(0px);
      }

      50% {
        transform: translatey(-20px);
      }

      100% {
        transform: translatey(0px);
      }
    }
  }
`;
