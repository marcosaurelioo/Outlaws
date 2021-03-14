import React, { useEffect, useState } from "react";
import Parallax from "parallax-js";

import { ReactComponent as Pisces } from "../../Assets/Pisces.svg";
import { ReactComponent as Github } from "../../Assets/Github.svg";
import { ReactComponent as Linkedin } from "../../Assets/Linkedin.svg";
import { Container, CardContent, LargeCard, SmallCard } from "./styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Red from "../../Assets/Images/Red.jpg";

export default function MarcosCard() {
  const isMobile = useWindowWidth() < 1200;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const card = document.getElementById("card");
    new Parallax(card);
  }, []);

  const setState = () => {
    if (isMobile === true) {
      setOpen(!open);
    }
  };

  return (
    <Container id="card">
      <CardContent data-depth="0.2" onClick={setState} open={open}>
        <LargeCard id="largecard" open={open}>
          <img src={Red} alt="" draggable="false" />
          <div className="title">
            <h1>Marcos</h1>
          </div>
        </LargeCard>
        <SmallCard id="smallcard">
          <div className="text">
            <Pisces className="zodiac-sign" />
            <strong>Constelação guardiã: Peixes</strong>
            <strong>Nome: Marcos Aurélio</strong>
            <strong>FullStack developer</strong>
            <strong>Idade: 18</strong>
            <div className="buttons">
              <strong />
              <strong>
                <a href="https://github.com/Maark007" target="_black">
                  <Github fill="#fff" height="21px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcos007/"
                  target="_black"
                >
                  <Linkedin fill="#fff" height="21px" />
                </a>
              </strong>
            </div>
          </div>
        </SmallCard>
      </CardContent>
    </Container>
  );
}
