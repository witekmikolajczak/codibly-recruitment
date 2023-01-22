import { combineReducers } from "redux";
import { productApi } from "./api/product";
import productReducer from "./reducer/product";

const initialReducers = {
  [productApi.reducerPath]: productApi.reducer,
  product: productReducer,
};

export const createReducer = () => {
  return combineReducers({
    ...initialReducers,
  });
};

export default createReducer;
