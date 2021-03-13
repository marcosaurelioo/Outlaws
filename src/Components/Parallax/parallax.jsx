import React, { useEffect, useState } from "react";
import { Body, Planet } from "./styles";

import Neptune from "../../Assets/Neptune.svg";
import Uranus from "../../Assets/Uranus.svg";
import Saturn from "../../Assets/Saturn.svg";
import Jupiter from "../../Assets/Jupiter.svg";
import Mars from "../../Assets/Mars.svg";
import Earth from "../../Assets/Earth.svg";
import Venus from "../../Assets/Venus.svg";
import Mercury from "../../Assets/Mercury.svg";

export default function ParallaxComponent() {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    const element = document.querySelectorAll(".planet");
    element.forEach((el) => {
      el.addEventListener("mouseover", () => {
        setAnimation(el.alt);
      });
      el.addEventListener("mouseleave", () => {
        setAnimation(true);
      });
    });
  });

  return (
    <Body>
      <div className="container">
        <div className="planets">
          <Planet
            value="99%"
            velocity="110s"
            animation={animation}
            id="Neptune"
          >
            <img
              draggable="false"
              src={Neptune}
              alt="Neptune"
              className="planet"
            />
          </Planet>
          <Planet value="88%" velocity="90s" animation={animation} id="Uranus">
            <img
              draggable="false"
              src={Uranus}
              alt="Uranus"
              className="planet"
            />
          </Planet>
          <Planet value="78%" velocity="65s" animation={animation} id="Saturn">
            <img
              draggable="false"
              src={Saturn}
              alt="Saturn"
              className="planet"
            />
          </Planet>
          <Planet value="68%" velocity="55s" animation={animation} id="Jupiter">
            <img
              draggable="false"
              src={Jupiter}
              alt="Jupiter"
              className="planet"
            />
          </Planet>
          <Planet value="59%" velocity="45s" animation={animation} id="Mars">
            <img draggable="false" src={Mars} alt="Mars" className="planet" />
          </Planet>
          <Planet value="51%" velocity="30s" animation={animation} id="Earth">
            <img draggable="false" src={Earth} alt="Earth" className="planet" />
          </Planet>
          <Planet value="42%" velocity="19s" animation={animation} id="Venus">
            <img draggable="false" src={Venus} alt="Venus" className="planet" />
          </Planet>
          <Planet value="31%" velocity="12s" animation={animation} id="Mercury">
            <img
              draggable="false"
              src={Mercury}
              alt="Mercury"
              className="planet"
            />
          </Planet>
        </div>
      </div>
    </Body>
  );
}
