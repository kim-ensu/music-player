import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IGenre } from "models/models";
import { genresListInitState } from "utils/genresInitData";

interface IGenresState {
  loading: boolean;
  error: string;
  currentGenreId: number;
  genresList: IGenre[];
}

const initialState: IGenresState = {
  loading: false,
  error: "",
  currentGenreId: 0,
  genresList: genresListInitState,
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    changeGenreId: (state, action: PayloadAction<number>) => {
      state.currentGenreId = action.payload;
    },
  },
});

export const { changeGenreId } = genresSlice.actions;
export default genresSlice.reducer;
