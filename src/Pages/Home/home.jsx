import React, { useState } from "react";
import Galaxy from "../../Assets/Videos/gargantua.mp4";

import { ReactComponent as CloseIcon } from "../../Assets/Error.svg";
import { ReactComponent as ArrowIcon } from "../../Assets/Arrow.svg";
import { Body, Content, Sidebar, Main } from "./styles";
import { useWindowWidth } from "../../hooks/useWindowWidth";

import MarcosCard from "../../Components/AnimatedCard/Marcos";
import AnnaCard from "../../Components/AnimatedCard/Anna";
import BrennoCard from "../../Components/AnimatedCard/Breno";

export default function App() {
  const isMobile = useWindowWidth() <= 900;
  const [openSidebar, setSidebar] = useState(false);
  const [card, setCard] = useState(0);

  const openModel = () => {
    if (isMobile) setSidebar(!openSidebar);
    else setSidebar(true);
  };

  const chooseCard = (type) => {
    if (type === "back") {
      if (card - 1 < 0) return;
      setCard((prev) => prev - 1);
    }
    if (type === "next") {
      if (card + 1 > 2) return;
      setCard((prev) => prev + 1);
    }
  };

  const siderbarCard = (id) => {
    setSidebar(false);
    setCard(id);
  };

  return (
    <Body>
      <video loop muted src={Galaxy} type="video/mp4" autoPlay />
      <Content isOpen={isMobile && openSidebar}>
        <Sidebar isOpen={openSidebar}>
          {!isMobile && (
            <CloseIcon height={22} onClick={() => setSidebar(false)} />
          )}
          <div className="sidebar-container">
            <div className="section">
              <span>Selecione uma seção</span>
              <div className="team-names">
                <h4 onClick={() => siderbarCard(0)}>Marcos</h4>
                <h4 onClick={() => siderbarCard(1)}>Breno</h4>
                <h4 onClick={() => siderbarCard(2)}>Anallu</h4>
              </div>
            </div>
          </div>
        </Sidebar>
        <header>
          <div className="header-nav" onClick={openModel}>
            <div className="navbar" />
          </div>
          <div className="header-info">
            <h3>Outlaws</h3>
          </div>
        </header>
        <div className="container">
          <Main>
            <div className="arrow" onClick={() => chooseCard("back")}>
              <ArrowIcon height={20} className="first-arrow" />
            </div>
            <div className="cards">
              {card === 0 && <MarcosCard />}
              {card === 1 && <BrennoCard />}
              {card === 2 && <AnnaCard />}
            </div>
            <div className="arrow" onClick={() => chooseCard("next")}>
              <ArrowIcon height={20} />
            </div>
          </Main>
        </div>
      </Content>
    </Body>
  );
}
