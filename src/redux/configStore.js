import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    // Chứa reducer
})

export const store = createStore(rootReducer, + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())