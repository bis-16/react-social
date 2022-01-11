import React from "react";
import {
    addNewPostAC,
    updateNewPostAC,
    likePostAC,
    dislikePostAC,
} from "../../../myRedux/profileReducer";
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
            dispatch(addNewPostAC())
        },
        onPostChangeCont: (text) => {
            let action = updateNewPostAC(text)
            dispatch(action)
        },
        likePost: () => {
            dispatch(likePostAC())
        },
        dislikePost: () => {
            dispatch(dislikePostAC())
        }
    }
}

const  MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
