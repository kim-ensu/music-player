import React, { FC } from "react";
import "./Player.css";

type Props = {};

const Player: FC<Props> = (props) => {
  return (
    <div className="player">
      <div className="player__current-song"></div>
      <div className="player__control-panel">
        <div className="player__timeline-waveform"></div>
        <div className="player__buttons">
          <button className="backward"></button>
          <button className="play-pause"></button>
          <button className="forward"></button>
        </div>
      </div>
      <div className="player__volume"></div>
    </div>
  );
};

export default Player;
