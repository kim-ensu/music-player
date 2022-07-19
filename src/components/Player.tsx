import React, { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store/index";
import "./Player.css";

type Props = {};

const Player: FC<Props> = (props) => {
  const count = useSelector((state: RootState) => state.music.musicList[0]);
  return (
    <div className="player">
      <div className="player__current-song"></div>
      <div className="player__control-panel">
        <audio src={count.audio} preload="metadata"></audio>
        <div className="player__timeline-waveform">
          <div>0:00</div>
          <input type="range" />
          <div>2:49</div>
        </div>
        <div className="player__buttons">
          <button className="backward">previous</button>
          <button className="play-pause">play pause</button>
          <button className="forward">next</button>
        </div>
      </div>
      <div className="player__volume"></div>
    </div>
  );
};

export default Player;
