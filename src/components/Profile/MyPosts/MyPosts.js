import Post from "./Post/Post";
import React from "react";
import s from "./MyPosts.module.css"

function MyPosts(props) {
// debugger
    let postsElements = props.postsArr
        .map(post => <Post id={props.id} message={post.message} likes={post.likes} dislikes={post.dislikes}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        // props.addNewPost(text)
        props.dispatch({type: 'ADD-NEW-POST'})
        //console.log('text=',text)
    }

    let onPostChange = () => {
        console.log("mypost.js>onPostChange")
        let text = newPostElement.current.value
        // props.updateNewPostText(text)
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        // debugger
    }

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            {/*<div className={s.addItem}>*/}

                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                />
                <button onClick={addPost}>add post</button>
            {/*</div>*/}
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
