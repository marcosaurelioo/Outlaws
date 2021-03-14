import React, { useEffect, useState } from "react";
import PlanetsVideo from "../../Assets/Videos/planets.mp4";

import { ReactComponent as HeadPhone } from "../../Assets/Headphone.svg";
import { ReactComponent as Play } from "../../Assets/Play.svg";
import { Body, Content, Paragraph, Transition } from "./styles";

import Home from "../Home/home";

export default function Login({ setPlaySong }) {
  const videoPlayer = document.getElementById("video");
  const [playing, setIsPlaying] = useState(false);
  const [isOver, setIsOver] = useState(false);

  const playVideo = () => {
    setPlaySong(true);
    setIsPlaying(true);
    videoPlayer.play();
  };

  useEffect(() => {
    if (playing) {
      setInterval(() => {
        setIsPlaying(false);
        setIsOver(true);
      }, 62400);
    }
  }, [playing, videoPlayer]);

  return (
    <Transition isOver={isOver}>
      <Body id="login" isPlaying={playing}>
        <video loop muted id="video" src={PlanetsVideo} type="video/mp4" />
        <Content isPlaying={playing}>
          <div className="items-box">
            <Paragraph isPlaying={playing}>
              <p>"Faça elevar  o cosmo no seu coração"</p>
              <span>- Outlaws</span>
            </Paragraph>
            <div className="btn-content">
              <button className="login-btn" onClick={playVideo}>
                <Play height={18} />
                START
              </button>
              <div className="headphone-box">
                <HeadPhone height={14} />
                <span>HEADPHONES RECOMMENDED</span>
              </div>
            </div>
          </div>
        </Content>
      </Body>
      {isOver && <Home />}
    </Transition>
  );
}
