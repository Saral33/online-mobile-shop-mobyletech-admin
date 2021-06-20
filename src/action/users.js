import axios from 'axios'
import {GET_USERS_FAIL,GET_USERS_REQ,GET_USERS_SUCCESS} from '../config/actiontypes'


export const getUsers = ()=> async dispatch=>{
    dispatch({type:GET_USERS_REQ})
    try {
     const res = await axios.get(`/api/admin/userlist`)
     dispatch({
         type: GET_USERS_SUCCESS,
         payload: res.data.users
     })   
    } catch (error) {
        dispatch({
            type: GET_USERS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message
            : error.message
        })
    }
}