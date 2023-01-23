import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { emptyData } from '../../../util/emptyData';
const initialState: ApiDataInterface = emptyData;

const apiDataReducer = createSlice({
  name: 'apiData',
  initialState,
  reducers: {
    loadApiDataCollection: (
      state,
      action: PayloadAction<typeof initialState>
    ) => {
      state = action.payload;
      return state;
    },
  },
});

export const { loadApiDataCollection } = apiDataReducer.actions;
export default apiDataReducer.reducer;
