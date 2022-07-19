import React, { FC, useState } from "react";
import "./Sidebar.css";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { changeGenreId } from "store/slices/genresSlice";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {};

const Sidebar: FC<Props> = (props) => {
  const genresList = useAppSelector((state) => state.genres.genresList);
  const dispatch = useAppDispatch();

  const [click, setClick] = useState<boolean>(false);

  const handleMenuToggle = () => setClick(!click);

  const handleClick = (genreId: number) => {
    dispatch(changeGenreId(genreId));
  };

  return (
    <div className="sidebar">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {genresList.map(({ id, name }) => (
          <li key={id} onClick={() => handleClick(id)}>
            {name}
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={handleMenuToggle}>
        {click ? (
          <FaTimes size={20} className="hamburger-color" />
        ) : (
          <FaBars size={20} className="hamburger-color" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
