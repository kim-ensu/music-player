import React, { FC } from "react";
import TrackCard from "./TrackCard";
import "./Playlist.css";
import { useAppSelector } from "store/hooks";

type Props = {};

const Playlist: FC<Props> = (props) => {
  const playlistArr = useAppSelector((state) => state.music.musicList);
  return (
    <div className="playlist">
      <ul>
        {playlistArr.map((track) => (
          <TrackCard track={track} key={track.id} />
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
