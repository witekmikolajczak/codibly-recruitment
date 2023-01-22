import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: DataInterface = {
   id: 0,
   name: '',
   year: 0,
   color: '',
   pantone_value: '',
   isOpen:false
}

const currentApiDataReducer = createSlice({
  name: "currentApiData",
  initialState,
  reducers: {
    loadCurrentApiData: (
      state,
      action: PayloadAction<typeof initialState>
    ) => {
      state = {...action.payload, isOpen:true};
      return state;
    },

    closeCurrentApiData: (
      state,
    ) => {
      state = {...state, isOpen:false};
      return state;
    },

  },
});

export const { loadCurrentApiData, closeCurrentApiData } =
  currentApiDataReducer.actions;
export default currentApiDataReducer.reducer;
