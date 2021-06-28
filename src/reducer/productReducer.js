import {
  CREATE_PRODUCTS_FAIL,
  CREATE_PRODUCTS_REQ,
  CREATE_PRODUCTS_RESET,
  CREATE_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQ,
  GET_PRODUCTS_STATS_FAIL,
  GET_PRODUCTS_STATS_REQ,
  GET_PRODUCTS_STATS_SUCCESS,
  GET_PRODUCTS_SUCCESS,
} from '../config/actiontypes';

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

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case CREATE_PRODUCTS_REQ:
      return { ...state, loading: true };
    case CREATE_PRODUCTS_SUCCESS:
      return { loading: false, success: true };
    case CREATE_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_PRODUCTS_RESET:
      return { state: {} };
  }
};

export const getproductStats = (state = { stats: [] }, action) => {
  switch (action.type) {
    default:
      return state;
    case GET_PRODUCTS_STATS_REQ:
      return { ...state, loading: true };
    case GET_PRODUCTS_STATS_SUCCESS:
      return { loading: false, stats: action.payload };
    case GET_PRODUCTS_STATS_FAIL:
      return { loading: false, error: action.payload };
  }
};
