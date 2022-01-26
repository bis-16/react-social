import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
// import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({ //глобальные ветки стэйта которые в нём будут
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

//let store = createStore(reducers, applyMiddleware())
let store = createStore(reducers)

export default store

window.store = store;
