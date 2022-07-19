import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITrack } from "models/models";
import { musicListInitState } from "utils/initdata";

interface IMusicState {
  loading: boolean;
  error: string;
  musicList: ITrack[];
}

const initialState: IMusicState = {
  loading: false,
  error: "",
  musicList: musicListInitState,
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addTrack: (state, action: PayloadAction<ITrack>) => {
      state.musicList.push(action.payload);
    },
  },
});

export const { addTrack } = musicSlice.actions;
export default musicSlice.reducer;
