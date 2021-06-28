import axios from 'axios';
import {
  CREATE_PRODUCTS_FAIL,
  CREATE_PRODUCTS_REQ,
  CREATE_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQ,
  GET_PRODUCTS_STATS_FAIL,
  GET_PRODUCTS_STATS_REQ,
  GET_PRODUCTS_STATS_SUCCESS,
  GET_PRODUCTS_SUCCESS,
} from '../config/actiontypes';

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQ });
  try {
    const res = await axios.get(`/api/admin/products`);
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (body) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCTS_REQ });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await axios.post(`/api/admin/newproduct`, body, config);
    dispatch({ type: CREATE_PRODUCTS_SUCCESS });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductStats = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_STATS_REQ });
  try {
    const { data } = await axios.get('/api/products/stats');
    dispatch({
      type: GET_PRODUCTS_STATS_SUCCESS,
      payload: data.stats,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_STATS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
