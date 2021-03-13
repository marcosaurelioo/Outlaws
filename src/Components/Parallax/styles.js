import styled, { keyframes, css } from "styled-components";

import Sun from "../../Assets/Sun.svg";

export const circle = keyframes`
 from {
    transform: rotateZ(0deg);
 }
 to {
    transform: rotateZ(360deg);
 }
`;

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  .container {
    width: 100%;
    height: 100vh;
    background-image: url(${Sun});
    background-position: center;
    background-size: 120px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    animation-duration: 90s;
    animation-name: ${circle};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .planets {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Planet = styled.div`
  height: ${({ value }) => value};
  width: calc(${({ value }) => value} / 2);
  animation-duration: ${({ velocity }) => velocity};
  animation-name: ${circle};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  img {
    cursor: pointer;
    margin: -15px;
    height: 50px;
    transition: all 1s ease;
    position: relative;
    z-index: 100;
    :hover {
      transition: all 500ms ease;
      height: 70px;
    }
  }
  ${({ animation, id }) =>
    animation === id &&
    css`
      animation-play-state: paused;
      z-index: 10;
    `}
    }
`;
