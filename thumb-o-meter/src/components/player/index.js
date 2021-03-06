import React from "react";
import { FaPlayCircle, FaPauseCircle, FaStopCircle } from "react-icons/fa";

import styles from "./player.module.css";

const Player = ({ file }) => {
  const handlePlay = () => {
    file.play();
  };
  const handlePause = () => {
    file.pause();
  };

  const handleStop = () => {
    file.pause();
    file.currentTime = 0;
  };
  return (
    <div className={styles.container}>
      <button onClick={() => handlePlay()}>
        <FaPlayCircle />
      </button>
      <button onClick={() => handlePause()}>
        <FaPauseCircle />
      </button>
      <button onClick={() => handleStop()}>
        <FaStopCircle />
      </button>
    </div>
  );
};

export default Player;
