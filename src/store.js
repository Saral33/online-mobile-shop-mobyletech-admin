import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import {authReducer, userInfoReducer} from './reducer/authReducer'
import {userListReducer} from './reducer/userReducer'
import { orderReducer } from './reducer/orderReducer'
const reducer = combineReducers({
    auth: authReducer,
    userInfo: userInfoReducer,
    userList: userListReducer,
    orderList : orderReducer
})


const initialState = {
   
}
const middleWare = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)))


export default store