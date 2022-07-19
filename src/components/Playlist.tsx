import React, { FC } from "react";
import TrackCard from "./TrackCard";
import "./Playlist.css";
import { useAppSelector } from "store/hooks";
import { stat } from "fs";

type Props = {};

const Playlist: FC<Props> = (props) => {
  const playlistArr = useAppSelector((state) =>
    currentGenreId === 0
      ? state.music.musicList
      : state.music.musicList.filter((track) => track.genreId === currentGenreId)
  );
  const currentGenreId = useAppSelector((state) => state.genres.currentGenreId);

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
