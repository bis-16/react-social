import Post from "./Post/Post";
import React from "react";
import s from "./MyPosts.module.css"

function MyPosts(props) {

    let postsElements = props.state.postsArr
        .map( post => <Post id={props.id} message={post.message} likes={post.likes} dislikes={post.dislikes}/>)
    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            <div className={s.addItem}>
                <textarea>123</textarea>
                <button>add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
