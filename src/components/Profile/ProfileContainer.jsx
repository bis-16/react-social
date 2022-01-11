
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {setUserProfile} from "../../myRedux/profileReducer";

class ProfileAPIContainer extends React.Component{
    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>

        );
    }

    componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            this.props.setUserProfile(response.data)
        })
    }
}

/*********
 *
 */

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         setUserProfile: (users) => {
//             dispatch(setUserProfileAC(users))
//         },
//     }
// }

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer);
export default ProfileContainer;