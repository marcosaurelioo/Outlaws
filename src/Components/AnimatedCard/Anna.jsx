import React, { useEffect, useState } from "react";
import Parallax from "parallax-js";

import { ReactComponent as Aquarius } from "../../Assets/Aquarius.svg";
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
      <CardContent data-depth="0.3" onClick={setState} open={open}>
        <LargeCard id="largecard">
          <img
            src="https://9to5mac.com/wp-content/uploads/sites/6/2018/08/xsw-featured.png"
            alt=""
            draggable="false"
          />
          <div className="title">
            <h1>Anallu</h1>
          </div>
        </LargeCard>
        <SmallCard id="smallcard">
          <div className="text">
            <Aquarius className="zodiac-sign" />
            <strong>Constelação guardiã: Aquário</strong>
            <strong>Nome: Anallu Tostes</strong>
            <strong>UI & UX design</strong>
            <strong>Idade: 40</strong>
            <div className="buttons">
              <strong />
              <strong>
                <a href="https://github.com/anallutostes" target="_black">
                  <Github fill="#fff" height="21px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anallu-tostes-b35b93104"
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
