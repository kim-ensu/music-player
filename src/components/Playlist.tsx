import React, { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "store/index";
import "./Playlist.css";

type Props = {};

const Playlist: FC<Props> = (props) => {
  const playlistArr = useSelector((state: RootState) => state.music.musicList);
  return (
    <div className="playlist">
      {playlistArr.map((track) => (
        <TrackCard />
      ))}
    </div>
  );
};

export default Playlist;
