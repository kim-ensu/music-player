import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store/index";
import "./Player.css";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";

type Props = {};

const Player: FC<Props> = (props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

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
          <button className="backward">
            <AiFillStepBackward />
          </button>
          <button className="play-pause" onClick={togglePlayPause}>
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </button>
          <button className="forward">
            <AiFillStepForward />
          </button>
        </div>
      </div>
      <div className="player__volume"></div>
    </div>
  );
};

export default Player;
