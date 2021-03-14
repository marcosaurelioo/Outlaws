import styled, { css, keyframes } from "styled-components";

const AppearBody = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Body = styled.div`
  width: 100%;
  animation: ${AppearBody} 5s ease;
  video {
    width: 100%;
    height: 100vh;
    filter: brightness(25%);
    object-fit: cover;
    position: absolute;
  }
  .cards {
    height: 100%;
    width: 100%;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  .container {
    height: calc(100% - 70px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    z-index: 10000;
  }
  header {
    width: 100%;
    height: 70px;
    box-shadow: 0px 0px 0px 1px rgb(255 255 255 / 12%);
    display: flex;
    transition: background-color 0.8s cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .header-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 100%;
    cursor: pointer;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 5px;
    padding-right: 6px;
  }
  .header-info {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      color: #fff;
      text-transform: uppercase;
      font-family: "Roboto Slab", serif;
      font-size: 19px;
      letter-spacing: 2.2px;
      font-weight: 100;
      padding-right: 70px;
    }
  }
  .navbar {
    width: 35px;
    height: 2px;
    background: #ddd;
    position: relative;
    transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    :after {
      content: "";
      position: absolute;
      width: 35px;
      height: 2px;
      background: #ddd;
      margin-top: 8px;
      transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    }
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      header {
        background-color: #fff;
        transition: background-color 0.8s cubic-bezier(0.23, 1, 0.32, 1),
          box-shadow 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      .header-info {
        h3 {
          color: #000;
          font-weight: 600;
        }
      }
      .navbar {
        transform: rotate(45deg);
        width: 25px;
        transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        background: #000;
        :after {
          transform: rotate(90deg);
          width: 25px;
          top: -7px;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          background: #000;
        }
      }
    `}

  @media (max-width: 900px) {
    .header-nav {
      padding: 0;
      border-right: none;
    }
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  background: #fff;
  width: 414px;
  height: 100%;
  z-index: 100;
  transform: translate3d(-100%, 0, 0);
  transition: box-shadow 1.5s cubic-bezier(0.23, 1, 0.32, 1),
    transform 1.5s cubic-bezier(0.23, 1, 0.32, 1);
  padding: 24px 29px;
  bottom: 0;
  svg {
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    :hover {
      transform: rotate(90deg);
    }
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: none;
    `}
  @media (max-width: 900px) {
    height: calc(100% - 70px);
    width: 100%;
  }
  .sidebar-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 17vh;
    span {
      font-family: "Roboto Slab", serif;
      font-weight: 600;
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
  .team-names {
    margin-top: 2rem;
    h4 {
      font-family: "Raleway", sans-serif;
      font-weight: 100;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-size: 3rem;
      line-height: 1;
      letter-spacing: -0.01em;
      cursor: pointer;
      padding: 5px 0;
      transition: all 1s ease;
      position: relative;
      display: flex;
      :hover {
        :after {
          opacity: 1;
          transition: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
      }
      :after {
        opacity: 0;
        content: "";
        position: absolute;
        transition: opacity 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        background: #000;
        width: inherit;
        width: 100%;
        height: 2px;
        bottom: 0;
      }
    }
  }
`;

export const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .arrow {
    height: 50px;
    width: 50px;
    background: #000;
    margin-top: -50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    .first-arrow {
      transform: rotate(180deg);
    }
    svg {
      transition: all 0.4s ease;
      fill: #fff;
    }
    :hover {
      transition: all 0.4s ease;
      background: #fff;
      svg {
        transition: all 0.4s ease;
        fill: #000;
      }
    }
  }
`;
