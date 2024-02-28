import React from "react";
import styled from "styled-components";
import { PiStarFourBold } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";

const Background = () => {
  return (
    <BackgroundWrapper>
      <section className="stars">
        <PiStarFourFill />
        <PiStarFourBold />
        <PiStarFourFill />
        <PiStarFourFill />
        <PiStarFourFill />
        <PiStarFourBold />
        <PiStarFourFill />
        <PiStarFourBold />
        <PiStarFourBold />
        <PiStarFourFill />
      </section>
    </BackgroundWrapper>
  );
};

export default Background;

const BackgroundWrapper = styled.section`
  width: 100%;
  height: 100%;

  .stars {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .stars svg {
    position: fixed;
    display: block;
    width: 20px;
    height: 20px;
    color: var(--color-purple2);
    bottom: -150px;
    animation: animate 25s linear infinite;
  }
  .stars svg:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }
  .stars svg:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }
  .stars svg:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }
  .stars svg:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }
  .stars svg:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }
  .stars svg:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }
  .stars svg:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }
  .stars svg:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 45s;
  }
  .stars svg:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 35s;
  }
  .stars svg:nth-child(10) {
    left: 80%;
    width: 150px;
    height: 150px;
    animation-delay: 11s;
  }
  @keyframes animate {
    0% {
      opacity: 1;
      border-radius: 0;
      transform: translateY(0) rotate(0deg);
    }
    100% {
      opacity: 0;
      border-radius: 50%;
      transform: translateY(-1000px) rotate(720deg);
    }
  }
`;
