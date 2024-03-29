import React, { FC, useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import "./Player.css";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";
import { changeCurrentTrackId } from "store/slices/musicSlice";

type Props = {};

const Player: FC<Props> = (props) => {
  const trackId = useAppSelector((state) => state.music.currentTrackId);
  const currentTrack = useAppSelector((state) =>
    state.music.musicList.find((track) => track.id === trackId)
  );

  const currentGenreId = useAppSelector((state) => state.genres.currentGenreId);
  const playlistArr = useAppSelector((state) =>
    currentGenreId === 0
      ? state.music.musicList
      : state.music.musicList.filter((track) => track.genreId === currentGenreId)
  );

  const dispatch = useAppDispatch();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioPlayer = useRef<HTMLAudioElement>(null!);
  const progressBar = useRef<HTMLInputElement>(null!);
  const animationRef = useRef<number>(null!);

  useEffect(() => {
    if (trackId !== null) {
      setIsPlaying(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  }, [trackId]);

  const onLoadedMetadata = () => {
    setDuration(audioPlayer.current?.duration);
    const seconds = Math.floor(audioPlayer.current.duration);
    progressBar.current.max = seconds.toString();
  };

  const calculateTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime.toString();
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = +progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(+progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(+progressBar.current.value);
  };

  const handleBackward = () => {
    const playlistCurrentTrackIndex = playlistArr.findIndex((track) => track.id === trackId);
    if (playlistCurrentTrackIndex === 0) {
      dispatch(changeCurrentTrackId(playlistArr[playlistArr.length - 1].id));
    } else {
      dispatch(changeCurrentTrackId(playlistArr[playlistCurrentTrackIndex - 1].id));
    }
  };

  const handleForward = () => {
    const playlistCurrentTrackIndex = playlistArr.findIndex((track) => track.id === trackId);
    if (playlistCurrentTrackIndex === playlistArr.length - 1) {
      dispatch(changeCurrentTrackId(playlistArr[0].id));
    } else {
      dispatch(changeCurrentTrackId(playlistArr[playlistCurrentTrackIndex + 1].id));
    }
  };

  return (
    <div className="player">
      {trackId && (
        <div className="player__current-song">
          <img src={currentTrack?.album_img} alt="" width={90} height={90} />
          <div className="player__current-song__text">
            <h1>{currentTrack?.name}</h1>
            <p>{currentTrack?.singer}</p>
          </div>
        </div>
      )}

      <div className="player__control-panel">
        <audio
          ref={audioPlayer}
          src={currentTrack?.audio}
          preload="metadata"
          onLoadedMetadata={onLoadedMetadata}></audio>

        <div className="player__buttons">
          <button className="backward-btn" onClick={handleBackward}>
            <AiFillStepBackward />
          </button>
          <button className="play-pause-btn" onClick={togglePlayPause}>
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </button>
          <button className="forward-btn" onClick={handleForward}>
            <AiFillStepForward />
          </button>
        </div>

        <div className="player__timeline-waveform">
          <div className="player__current-time">{calculateTime(currentTime)}</div>
          <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
          <div className="player__duration">
            {duration && !isNaN(duration) && calculateTime(duration)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
