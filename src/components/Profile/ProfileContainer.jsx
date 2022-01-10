
import {connect} from "react-redux";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import axios from "axios";
import Profile from "./Profile";

class ProfileContainer extends React.Component{
    render(){
        return (
            <div>
                <Profile {...this.props}/>
            </div>

        );
    }

        componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                //this.props.setUsersF(response.data.items)
            })
    }



}

let mapStateToProps = (state) => {
    return {
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

//const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;

