import React, { FC, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store/index";
import "./Player.css";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";

type Props = {};

const Player: FC<Props> = (props) => {
  const track = useSelector((state: RootState) => state.music.musicList[4]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);

  const audioPlayer = useRef<HTMLAudioElement>(null!);

  useEffect(() => {
    setDuration(audioPlayer.current.duration);
  }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  return (
    <div className="player">
      <div className="player__current-song">
        <img src={track.album_img} alt="" width={100} height={100} />
      </div>
      <div className="player__control-panel">
        <audio ref={audioPlayer} src={track.audio} preload="metadata"></audio>
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
        <div className="player__timeline-waveform">
          <div>0:00</div>
          <input type="range" />
          <div>{duration}</div>
        </div>
      </div>
      <div className="player__volume"></div>
    </div>
  );
};

export default Player;
