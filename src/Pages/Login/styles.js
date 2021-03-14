import styled, { css, keyframes } from "styled-components";

export const OpacityFadeOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const isOverFade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

export const Body = styled.div`
  height: 100vh;
  width: 100%;
  background: #000;
  .items-box {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    background: #000;
    opacity: 1;
  }
  .btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  ${({ isPlaying }) =>
    isPlaying &&
    css`
      .btn-content {
        transition: all 2s ease-out;
        opacity: 0;
      }
      .items-box {
        transition: all 2s ease-out;
        background: none;
      }
    `}
  .headphone-box {
    display: flex;
    align-items: center;
    margin-bottom: 150px;
    span {
      color: #fff;
      margin-left: 10px;
      font-family: "DotGothic16", sans-serif;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
  .login-btn {
    margin-bottom: 20px;
    width: 145px;
    height: 40px;
    cursor: pointer;
    background: none;
    border: 2px solid #d9d9d9;
    color: #d9d9d9;
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.9px;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    outline: none;
    svg {
      margin-right: 5px;
    }
    :hover {
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      background: hsla(0, 0%, 100%, 0.15);
    }
  }

  @keyframes teste {
    0% {
      filter: brightness(0.3) blur(15px);
    }
    90% {
      filter: brightness(0.3) blur(15px);
    }
    100% {
      filter: none;
    }
  }

  video {
    min-width: 100%;
    max-width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    object-fit: cover;
    position: fixed;
    transition: filter 2s ease-out;
    ${({ isPlaying }) =>
      !isPlaying &&
      css`
        transition: filter 2s ease-out;
        filter: blur(10px);
      `}
    ${({ isPlaying }) =>
      isPlaying &&
      css`
        animation: teste 13s ease;
      `}
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Paragraph = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  opacity: 0;
  p {
    color: rgba(255, 255, 255, 0.5) !important;
    font-style: italic;
    font-family: "Roboto Slab", serif;
    font-weight: 100;
    font-size: 16px;
    letter-spacing: 5px;
    text-align: center;
    width: 500px;
  }
  span {
    color: rgb(255, 255, 255) !important;
    font-style: italic;
    font-family: "Roboto Slab", serif;
    font-weight: 100;
    font-size: 12px;
    letter-spacing: 5px;
    text-align: center;
    padding-top: 16px;
  }
  ${({ isPlaying }) =>
    isPlaying &&
    css`
      animation: ${OpacityFadeOut} 13s ease;
    `}
`;

export const Transition = styled.div`
  ${({ isOver }) =>
    isOver &&
    css`
      #login {
        animation: ${isOverFade} 4s ease;
        display: none;
      }
    `}
`;
