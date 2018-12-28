import {
  GET_STOCK,
  STOCK_LOADING,
  GET_STOCK_BY_TAGS
} from "../actions/stockTypes";
const initialState = {
  stock: [{ _id: 1, productName: "item 1 reducer" }],
  //stock: null,
  loading: false
};
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_STOCK:
      return {
        ...state,
        stock: [...payload, ...state.stock],
        loading: false
      };
    case STOCK_LOADING:
      return {
        ...state,
        loading: true
      };
    /*    case GET_STOCK_BY_TAGS:
      return {
        ...state,
        stock: [...payload, ...state.stock],
        loading: false
      }; */
    default:
      return state;
  }
}
