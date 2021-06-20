import axios from 'axios'
import {GET_ORDER_FAIL,GET_ORDER_SUCCESS,GET_ORDER_REQ} from '../config/actiontypes'



export const getOrders = ()=> async dispatch=>{

    dispatch({type:GET_ORDER_REQ})
    try {
        const res = await axios.get(`/api/admin/checkoutlist`)
        dispatch({
            type: GET_ORDER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_ORDER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message
            : error.message
        })
    }
}