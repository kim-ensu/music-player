import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IGenresState {
  loading: boolean;
  error: string;
  genresList: string[];
}

const initialState: IGenresState = {
  loading: false,
  error: "",
  genresList: ["Rap", "Pop", "Rock", "Electronic"],
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    addGenre: (state, action: PayloadAction<string>) => {
      state.genresList.push(action.payload);
    },
  },
});

export const { addGenre } = genresSlice.actions;
export default genresSlice.reducer;
