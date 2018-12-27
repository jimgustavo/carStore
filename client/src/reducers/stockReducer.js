import { GET_STOCK, STOCK_LOADING } from "../actions/stockTypes";
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
    case STOCK_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
}
