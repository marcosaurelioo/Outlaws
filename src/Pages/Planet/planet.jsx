import React, { useEffect } from "react";
import Parallax from "parallax-js";

import { ReactComponent as Earth } from "../../Assets/Saturn.svg";
import { Body } from "./styles";

export default function Planet() {
  
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  }, []);

  return (
    <Body id="scene">
      <div className="container" data-depth="0.6">
        <Earth height={500} />
      </div>
    </Body>
  );
}
