import React, { useEffect, useState } from "react";
import Parallax from "parallax-js";

import { ReactComponent as Lion } from "../../Assets/Lion.svg";
import { ReactComponent as Github } from "../../Assets/Github.svg";
import { ReactComponent as Linkedin } from "../../Assets/Linkedin.svg";
import { Container, CardContent, LargeCard, SmallCard } from "./styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";

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
        <LargeCard id="largecard">
          <img
            src="https://i.pinimg.com/originals/f9/d9/87/f9d98766079d82e5a996c2f648ce926d.jpg"
            alt=""
            draggable="false"
          />
          <div className="title">
            <h1>Breno</h1>
          </div>
        </LargeCard>
        <SmallCard id="smallcard">
          <div className="text">
            <Lion className="zodiac-sign" />
            <strong>Constelação guardiã: Leão</strong>
            <strong>Nome: Breno Guerra</strong>
            <strong>FullStack developer</strong>
            <strong>Idade: 18</strong>
            <div className="buttons">
              <strong />
              <strong>
                <a href="https://github.com/brenoguerra" target="_black">
                  <Github fill="#fff" height="21px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/breno-guerra/"
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
