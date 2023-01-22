import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: ApiDataInterface = {
   page: 0,
   per_page: 0,
   total: 0,
   total_pages: 0,
   data:[{
      id: 0,
      name: '',
      year: 0,
      color: '',
      pantone_value: ''
    }],
    support: {
      url: '',
      text: ''
    }
}

const apiDataReducer = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    loadApiData: (
      state,
      action: PayloadAction<typeof initialState>
    ) => {
      state = action.payload;
      return state;
    },

  },
});

export const { loadApiData } =
  apiDataReducer.actions;
export default apiDataReducer.reducer;
