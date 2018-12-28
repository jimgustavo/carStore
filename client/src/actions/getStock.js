import {
  GET_STOCK,
  STOCK_LOADING,
  GET_STOCK_BY_TAGS
} from "../actions/stockTypes";
import axios from "axios";

export const getStock = () => dispatch => {
  //dispatch can be used here because we've thunk, and allow us to use async requests with dispatch

  dispatch(setStockLoading());
  axios
    .get("/api/stock")
    .then(res => dispatch({ type: GET_STOCK, payload: res.data }));
};

export const setStockLoading = () => {
  return {
    type: STOCK_LOADING
  };
};

/*
export const getStockByTags = () => dispatch => {
  //dispatch can be used here because we've thunk, and allow us to use async requests with dispatch

  dispatch(setStockLoading());
  axios
    .get("/api/stock?keywords={TAG}")
    .then(res => dispatch({ type: GET_STOCK_BY_TAGS, payload: res.data }));
};
*/
