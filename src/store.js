import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { authReducer, userInfoReducer } from "./reducer/authReducer";
import { userListReducer } from "./reducer/userReducer";
import {
  approveOrderReducer,
  orderReducer,
  recentOrderReducer,
} from "./reducer/orderReducer";
import { productsReducer } from "./reducer/productReducer";
const reducer = combineReducers({
  auth: authReducer,
  userInfo: userInfoReducer,
  userList: userListReducer,
  orderList: orderReducer,
  recentOrderList: recentOrderReducer,
  approveOrders: approveOrderReducer,
  productList: productsReducer,
});

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
