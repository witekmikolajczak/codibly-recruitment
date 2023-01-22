import { combineReducers } from "redux";
import { apiData } from "./api/apiData";
import pageReducer from "./reducer/tablePage";
import apiDataReducer from "./reducer/apiData";
import currentApiDataReducer from "./reducer/currentApiData"


const initialReducers = {
  [apiData.reducerPath]: apiData.reducer,
  page: pageReducer,
  apiData: apiDataReducer,
  currentApiData: currentApiDataReducer
};

export const createReducer = () => {
  return combineReducers({
    ...initialReducers,
  });
};

export default createReducer;
