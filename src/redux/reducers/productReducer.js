import { ActionTypes } from "../contants/action-types";
const intialState = {
  products: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};