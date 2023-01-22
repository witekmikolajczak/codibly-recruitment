import { combineReducers } from "redux";
import { apiData } from "./api/apiData";
import pageReducer from "./reducer/tablePage";
import apiDataReducer from "./reducer/apiData";


const initialReducers = {
  [apiData.reducerPath]: apiData.reducer,
  page: pageReducer,
  apiData: apiDataReducer
};

export const createReducer = () => {
  return combineReducers({
    ...initialReducers,
  });
};

export default createReducer;
