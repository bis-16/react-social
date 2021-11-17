// import './Post.module.css'

import Post from "./Post/Post";
import React from "react";


function MyPosts(props) {

    let postsElements = props.postsArr
        .map( post => <Post id={props.id} message={post.message} likes={post.likes} dislikes={post.dislikes}/>)
    return (
        <div className="myposts">
            <h3>My posts</h3>
            {postsElements}
        </div>
    );
}

export default MyPosts;
