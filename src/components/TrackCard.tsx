import React from "react";
import { FC } from "react";
import "./TrackCard.css";
import { ITrack } from "models/models";

type Props = {
  track: ITrack;
};

const TrackCard: FC<Props> = ({ track: { name, singer, album_img } }) => {
  return (
    <li>
      <img src={album_img} alt="track cover" width={150} height={150} />
      <h1>{name}</h1>
      <h2>{singer}</h2>
    </li>
  );
};

export default TrackCard;
