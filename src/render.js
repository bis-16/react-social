import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import /*state,*/ {addNewPost} from "./components/myState/myState";

export let renderTree = (state) => {


    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addNewPost={addNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );


}