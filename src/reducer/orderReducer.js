import {GET_ORDER_FAIL,GET_ORDER_SUCCESS,GET_ORDER_REQ, APPROVE_ORDER_REQ, APPROVE_ORDER_SUCCESS, APPROVE_ORDER_FAIL, APPROVE_ORDER_RESET, GET_RECENTSALES_REQ, GET_RECENTSALES_SUCCESS, GET_RECENTSALES_FAIL} from '../config/actiontypes'

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
export const recentOrderReducer = (state={orders:[]},action)=>{
    switch(action.type){
        default : return state

        case GET_RECENTSALES_REQ:
            return{...state, loading:true}
        case GET_RECENTSALES_SUCCESS:
            return{loading:false,orders:action.payload}
        case GET_RECENTSALES_FAIL:
            return {loading:false,error:action.payload}
    }
}
export const approveOrderReducer = (state={},action)=>{
    switch(action.type){
        default : return state

        case APPROVE_ORDER_REQ:
            return{...state, loading:true}
        case APPROVE_ORDER_SUCCESS:
            return{loading:false,success:true}
        case APPROVE_ORDER_FAIL:
            return {loading:false,error:action.payload}
        case APPROVE_ORDER_RESET:
            return {state:{}}
    }
}
