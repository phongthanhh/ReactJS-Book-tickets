import { combineReducers, createStore } from "redux";
import { seatsReducer } from "./reducer/seatsReducer";
const rootReducer = combineReducers({
    // Chứa reducer
    seatsReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())