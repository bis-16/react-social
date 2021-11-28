import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./myState/myState";

let rerenderTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                // addNewPost={store.addNewPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                dispatch = {store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
// addNewPost("qwe");
rerenderTree(store.getState())
store.subscribe(rerenderTree)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();