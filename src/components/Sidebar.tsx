import React, { FC } from "react";
import { useAppSelector } from "store/hooks";

type Props = {};

const Sidebar: FC<Props> = (props) => {
  const genresList = useAppSelector((state) => state.genres.genresList);

  return (
    <div className="siderbar">
      <ul>
        {genresList.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
