import React, { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store/index";
import TrackCard from "./TrackCard";
import "./Playlist.css";

type Props = {};

const Playlist: FC<Props> = (props) => {
  const playlistArr = useSelector((state: RootState) => state.music.musicList);
  return (
    <div className="playlist">
      <ul>
        {playlistArr.map((track) => (
          <TrackCard track={track} />
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
