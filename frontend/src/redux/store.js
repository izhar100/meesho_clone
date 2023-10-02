import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { reducer as productReducer } from "./productReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as singleProductReducer } from "./singleProductReducer/reducer";
import { reducer as cartReducer } from "./cartReducer/reducer";
import { reducer as orderReducer } from "./orderReducer/reducer";

import thunk from "redux-thunk";

const allReducers=combineReducers({
    productReducer,
    authReducer,
    singleProductReducer,
    cartReducer,
    orderReducer
    
})

export const store=legacy_createStore(allReducers,applyMiddleware(thunk))