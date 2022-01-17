import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {setUserProfile} from "../../myRedux/profileReducer";
import {useMatch} from "react-router";

class ProfileAPIContainer extends React.Component{
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>

        );
    }

    componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : '2';

    if (!userId) userId=2;

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            this.props.setUserProfile(response.data)
        })
    }
}

/*********
 *
 */

const ProfileMatchContainer = (props) => {
    let match = useMatch("/profile/:userId");
    return (
        <ProfileAPIContainer {...props} match={match} />
    )
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

//const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileMatchContainer);
export default connect(mapStateToProps, {setUserProfile})(ProfileMatchContainer);
// export default ProfileContainer;