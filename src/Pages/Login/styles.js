import styled from "styled-components";

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
  }
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
`;
