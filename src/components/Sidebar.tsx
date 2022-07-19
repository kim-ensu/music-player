import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { changeGenreId } from "store/slices/genresSlice";

type Props = {};

const Sidebar: FC<Props> = (props) => {
  const genresList = useAppSelector((state) => state.genres.genresList);
  const dispatch = useAppDispatch();

  const handleClick = (genreId: number) => {
    dispatch(changeGenreId(genreId));
  };

  return (
    <div className="siderbar">
      <ul>
        {genresList.map(({ id, name }) => (
          <li key={id} onClick={() => handleClick(id)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
