import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let dialogsArr = [
    {id: 1, dialog: "user1"},
    {id: 2, dialog: "user2"},
    {id: 3, dialog: "user3"},
    {id: 4, dialog: "user4"},
    {id: 5, dialog: "user5"},
    {id: 6, dialog: "user6"},
]
let messagesArr = [
    {id: 1, message: "hello"},
    {id: 2, message: "how are you?"},
    {id: 3, message: "=)"},
]

let postsArr = [
    {id: 1, message: "this is my first post", likes: 54, dislikes: 8},
    {id: 2, message: "post2", likes: 21, dislikes: 98},
    {id: 3, message: "post3", likes: 24, dislikes: 48},
    {id: 4, message: "post4", likes: 64, dislikes: 38},
    {id: 5, message: "post5", likes: 14, dislikes: 18},
    {id: 6, message: "post6", likes: 24, dislikes: 58},
]


ReactDOM.render(
  <React.StrictMode>
    <App
        dialogsArr = {dialogsArr}
        messagesArr = {messagesArr}
        postsArr = {postsArr}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
