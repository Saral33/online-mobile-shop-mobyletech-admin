import axios from "axios";
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQ,
  GET_PRODUCTS_SUCCESS,
} from "../config/actiontypes";

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
