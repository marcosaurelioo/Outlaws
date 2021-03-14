import styled, { keyframes, css } from "styled-components";

const CloseBigCard = keyframes`
  from {
   opacity: 1;
  }
  to {
   opacity: 0;
  }
`;

const OpenBigCard = keyframes`
  from {
   opacity: 0;
  }
  to {
   opacity: 1;
  }
`;

const OpenSmallCard = keyframes`
  from {
   display: none;
   opacity: 0;
  }
  to {
   display: flex;
   opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: all !important;
  width: 100%;
`;

export const CardContent = styled.div`
  width: 86%;
  height: 50%;
  max-width: 1200px;
  display: flex !important;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    ${({ open }) =>
      open &&
      css`
        #largecard {
          animation: ${CloseBigCard} 0.4s ease;
          opacity: 0;
        }
        #smallcard {
          animation: ${OpenSmallCard} 0.7s ease;
          opacity: 1;
          display: flex !important;
        }
      `}
  }

  @media (max-width: 1200px) {
    ${({ open }) =>
      !open &&
      css`
        #largecard {
          animation: ${OpenBigCard} 0.4s ease;
          opacity: 1;
        }
      `}
  }
`;

export const LargeCard = styled.div`
  @media (max-width: 1200px) {
    width: 100%;
    z-index: 1000;
  }
  width: 85%;
  height: 90%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h1 {
      font-family: "Bebas Neue", sans-serif;
      font-size: 63px;
      opacity: 0.7;
      color: #f3b8ff;
      letter-spacing: 12px;
    }
  }
`;

export const SmallCard = styled.div`
  @media (max-width: 1200px) {
    position: relative;
    display: none;
    width: 100%;
    right: 25%;
  }
  width: 360px;
  height: 202px;
  background: black;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 26px;
  .text {
    color: white;
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
      font-size: 22px;
      margin-top: 22px;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: 0;
      width: 100%;
      justify-content: space-between;
    }
    strong {
      font-weight: 400;
      font-family: "Arimo", sans-serif;
      font-size: 13px;
      color: #eeeeff;
      padding: 5px 0;
      svg {
        padding: 0 7px;
        cursor: pointer;
      }
    }
  }
  .zodiac-sign {
    fill: #d9d9d9;
    height: 40px;
    position: absolute;
    right: 0;
  }
`;
