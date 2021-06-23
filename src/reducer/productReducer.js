import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQ,
  GET_PRODUCTS_SUCCESS,
} from "../config/actiontypes";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    default:
      return state;

    case GET_PRODUCTS_REQ:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.page,
      };
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
  }
};
