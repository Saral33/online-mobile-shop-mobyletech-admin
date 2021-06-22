import axios from 'axios'
import {GET_ORDER_FAIL,GET_ORDER_SUCCESS,GET_ORDER_REQ, APPROVE_ORDER_REQ, APPROVE_ORDER_FAIL, APPROVE_ORDER_SUCCESS, GET_RECENTSALES_REQ, GET_RECENTSALES_FAIL, GET_RECENTSALES_SUCCESS} from '../config/actiontypes'



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


export const approveOrder = (id)=> async dispatch =>{
    dispatch({type:APPROVE_ORDER_REQ})
    try {
        await axios.put(`/api/admin/approve-checkout/${id}`)
        dispatch({type: APPROVE_ORDER_SUCCESS})
    } catch (error) {
        dispatch({
            type: APPROVE_ORDER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message
            : error.message
        })
    }
}

export const getRecentSales = ()=> async dispatch=>{
    dispatch({type:GET_RECENTSALES_REQ})
    try {
        const res = await axios.get(`/api/admin/recent-checkout`)
        dispatch({
            type: GET_RECENTSALES_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: GET_RECENTSALES_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message
            : error.message
        })
    }
}