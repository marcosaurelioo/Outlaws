import React from "react";
import Galaxy from "../../Assets/Videos/galaxy.mp4";
import SolarSystem from "../../Components/Parallax/parallax";

import { Body, Content } from "./styles";

export default function App() {
  return (
    <Body>
      <video loop muted autoPlay>
        <source src={Galaxy} type="video/mp4" />
      </video>
      <Content>
        <SolarSystem />
      </Content>
    </Body>
  );
}
