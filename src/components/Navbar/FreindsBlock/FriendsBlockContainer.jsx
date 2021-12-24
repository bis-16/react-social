import React from "react";
import {connect} from "react-redux";
import FriendsBlock from "./FriendsBlock";

let mapStateToProps = (state) => {
    return {
        usersArr: state.usersPage.usersArr
    }
}
let mapDispatchToProps = (dispatch) => { // для передачи дочерней компоненте колбэков
    // debugger
    return {

    }
}

const friendsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBlock);


export default friendsBlockContainer;