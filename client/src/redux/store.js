import { createStore, combineReducers } from "redux";
import Reducer from "./reducers/Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    address: Reducer
})

 export const store = createStore(rootReducer, composeWithDevTools());