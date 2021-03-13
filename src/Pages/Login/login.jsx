import React from "react";

import { ReactComponent as HeadPhone } from "../../Assets/Headphone.svg";
import { ReactComponent as Play } from "../../Assets/Play.svg";
import { Body } from "./styles";

export default function Login({ setPlaySong }) {
  return (
    <Body>
      <div className="items-box">
        <button className="login-btn" onClick={() => setPlaySong(true)}>
          <Play height={18} />
          START
        </button>
        <div className="headphone-box">
          <HeadPhone height={14} />
          <span>HEADPHONES RECOMMENDED</span>
        </div>
      </div>
    </Body>
  );
}
