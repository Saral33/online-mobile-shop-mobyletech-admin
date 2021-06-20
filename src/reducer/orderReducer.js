import {GET_ORDER_FAIL,GET_ORDER_SUCCESS,GET_ORDER_REQ} from '../config/actiontypes'

export const orderReducer = (state={orders:[]},action)=>{
    switch(action.type){
        default : return state

        case GET_ORDER_REQ:
            return{...state, loading:true}
        case GET_ORDER_SUCCESS:
            return{loading:false,orders:action.payload}
        case GET_ORDER_FAIL:
            return {loading:false,error:action.payload}
    }
}