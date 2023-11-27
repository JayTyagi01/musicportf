import { useState, useEffect } from "react";
import "./audioplayer.css";
import Player from "./components/Player/Player";

function AudioPlayer() {
  const [songs] = useState([
    {
      title: "If_We_Have_Each_Other",
      artist: "Alec_Benjamin",
      img_src: "./src/1.webp",
      src: "./src/Alec_Benjamin_-_If_We_Have_Each_Other.mp3",
    },
    {
      title: "Cheap-Thrills",
      artist: "Sia",
      img_src: "./src/2.jpeg",
      src: "./music/somebody-new.mp3",
    },
    {
      title: "Genius",
      artist: "LSD ft. Sia, Diplo, Labrinth",
      img_src: "./src/3.jpg",
      src: "./src/",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="AudioPlayer">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default AudioPlayer;
