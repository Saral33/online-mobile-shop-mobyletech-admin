import { LOGIN_ADMIN_REQ,LOGIN_ADMIN_SUCCESS,LOGIN_ADMIN_FAIL,LOAD_ADMIN_SUCCESS,LOAD_ADMIN_FAIL } from "../config/actiontypes";
//import { urlApi } from "../config/baseurl";
import axios from 'axios'

export const loginAdmin = (body)=> async dispatch => {
    dispatch({type:LOGIN_ADMIN_REQ})

    try {
        const config = {
            headers: {
                
              'Content-Type': 'application/json',
            },
          };
        await axios.post(`/api/admin/adminlogin`,body,config)
       
        dispatch({type:LOGIN_ADMIN_SUCCESS})
        dispatch(loadUser())
        localStorage.setItem('authenticated', 'true')
    } catch (error) {
        localStorage.removeItem('authenticated')
        dispatch({
            type: LOGIN_ADMIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message
            : error.message
        })
    }
}

export const loadUser = ()=> async dispatch=>{
    try {
        const config = {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            mode:'cors',
            credentials:'include',
            withCredentials:true
        }
        const res = await axios.get(`/api/admin`,config)
        dispatch({
            type: LOAD_ADMIN_SUCCESS,
            payload: res.data
        })
        dispatch({type:LOGIN_ADMIN_SUCCESS})
        localStorage.setItem('authenticated', 'true')
    } catch (error) {
        localStorage.removeItem('authenticated')
        dispatch({
            type: LOAD_ADMIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message
            : error.message
        })
    }
}