import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

const reducer = combineReducers({

})

const initialState = {}
const middleWare = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)))


export default store