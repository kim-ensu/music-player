import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITrack } from "models/models";
import { musicListInitState } from "utils/musicInitData";

interface IMusicState {
  loading: boolean;
  error: string;
  currentTrackId: number | null;
  musicList: ITrack[];
}

const initialState: IMusicState = {
  loading: false,
  error: "",
  currentTrackId: null,
  musicList: musicListInitState,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    changeCurrentTrackId: (state, action: PayloadAction<number>) => {
      state.currentTrackId = action.payload;
    },
  },
});

export const { changeCurrentTrackId } = musicSlice.actions;
export default musicSlice.reducer;
