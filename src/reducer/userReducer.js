import {GET_USERS_FAIL,GET_USERS_REQ,GET_USERS_SUCCESS} from '../config/actiontypes'



export const userListReducer = (state={users:[]},action)=>{
    switch(action.type){
        default: return state
        case GET_USERS_REQ:
            return{...state,loading:true}
        case GET_USERS_SUCCESS:
            return{loading:false,users: action.payload}
        case GET_USERS_FAIL:
            return{loading:false,error:action.payload}
    }
}