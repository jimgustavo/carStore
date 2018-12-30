import { GET_STOCK, STOCK_LOADING } from "../actions/stockTypes";
const initialState = {
  stock: [
    { _id: 1, productName: "IPAD1" },
    { _id: 2, productName: "IPAD2" },
    { _id: 3, productName: "IPAD3" },
    { _id: 4, productName: "IPAD4" },
    { _id: 5, productName: "IPAD Air" }
  ],
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
    default:
      return state;
  }
}
