import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import Routes from "./Router/routes";
import Song from "./Assets/Music/theme.mp3";

export default function App() {
  const [playSong, setPlaySong] = useState(false);
  const [play] = useSound(Song, { volume: 0.3 });

  useEffect(() => {
    playSong === true && play();
  }, [playSong, play]);

  return <Routes setPlaySong={setPlaySong}/>;
}
