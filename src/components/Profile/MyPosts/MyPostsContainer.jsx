import Post from "./Post/Post";
import React from "react";
import {addNewPostActionCreator, updateNewPostActionCreator} from "../../../myRedux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



// function MyPostsContainer(props) {
//
//     let state = props.store.getState()
//
//
//     let addPost = () => {
//         props.store.dispatch(addNewPostActionCreator())
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostActionCreator(text)
//         props.store.dispatch(action)
//     }
//
//     return (
//         <MyPosts addPostCont={addPost}
//                  onPostChangeCont={onPostChange}
//                  postsArr = {state.profilePage.postsArr}
//         />
//     );
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostCont: () => {
            dispatch(addNewPostActionCreator())
        },
        onPostChangeCont: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
//

export default MyPostsContainer;
