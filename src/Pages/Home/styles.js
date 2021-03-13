import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  video {
    min-width: 100%;
    max-width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    filter: brightness(25%);
    background-size: cover;
    object-fit: cover;
    position: absolute;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
