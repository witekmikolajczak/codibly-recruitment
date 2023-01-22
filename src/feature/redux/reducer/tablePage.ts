import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: string = '0'

const pageReducer = createSlice({
  name: "page",
  initialState,
  reducers: {
    loadPageNumber: (
      state,
      action: PayloadAction<typeof initialState>
    ) => {
      state = action.payload;
      return state;
    },
  },
});

export const { loadPageNumber } =
  pageReducer.actions;
export default pageReducer.reducer;
