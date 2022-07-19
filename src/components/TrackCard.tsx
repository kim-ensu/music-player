import React from "react";
import { FC } from "react";
import "./TrackCard.css";
import { ITrack } from "models/models";

type Props = {
  track: ITrack;
};

const TrackCard: FC<Props> = ({ track: { name, singer, album_img } }) => {
  return (
    <li className="playlist_item">
      <div className="playlist_img-holder">
        <img src={album_img} alt="track cover" width={150} height={150} />
      </div>
      <div className="playlist_text">
        <h1>{name}</h1>
        <p>{singer}</p>
      </div>
    </li>
  );
};

export default TrackCard;
