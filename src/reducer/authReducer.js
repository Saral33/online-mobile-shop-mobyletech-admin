import { LOGIN_ADMIN_REQ,LOGIN_ADMIN_SUCCESS,LOGIN_ADMIN_FAIL, LOAD_ADMIN_SUCCESS, LOAD_ADMIN_FAIL } from "../config/actiontypes";



export const authReducer = (state={loading:true,success:false},action)=>{

    switch(action.type){
        default : return state

        case LOGIN_ADMIN_REQ:
            return{...state,loading:true}
        case LOGIN_ADMIN_SUCCESS:
            return{loading:false, success:true}
        case LOGIN_ADMIN_FAIL:
            return{loading:false,error:action.payload,success:false}
    }
}


export const userInfoReducer = (state={},action)=>{
    switch(action.type){
        default : return state

        case LOAD_ADMIN_SUCCESS:
            return{user:action.payload}
        case LOAD_ADMIN_FAIL:
            return{user:null, error:action.payload}
    }

}