import React, { FC } from "react";
import TrackCard from "./TrackCard";
import "./Playlist.css";
import { useAppSelector } from "store/hooks";

type Props = {};

const Playlist: FC<Props> = (props) => {
  const currentGenreId = useAppSelector((state) => state.genres.currentGenreId);
  const genreTitle = useAppSelector((state) =>
    state.genres.genresList.find((genre) => genre.id === currentGenreId)
  );
  const playlistArr = useAppSelector((state) =>
    currentGenreId === 0
      ? state.music.musicList
      : state.music.musicList.filter((track) => track.genreId === currentGenreId)
  );

  return (
    <div className="playlist">
      <h1 className="playlist__header">{genreTitle?.name}</h1>
      <ul>
        {playlistArr.map((track) => (
          <TrackCard track={track} key={track.id} />
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
