import Post from "./Post/Post";
import React from "react";
import s from "./MyPosts.module.css"


function MyPosts(props) {

    let postsElements = props.profilePage.postsArr
        .map(post => <Post id={props.id} message={post.message} likes={post.likes} dislikes={post.dislikes}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPostCont()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChangeCont(text)
    }

    return (
        <div className={s.myposts}>
            <h3>My posts</h3>
            {/*<div className={s.addItem}>*/}

            <textarea
                ref={newPostElement}
                onChange={onPostChange}
                value={props.profilePage.newPostText}
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
