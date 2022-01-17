import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {setUserProfile} from "../../myRedux/profileReducer";
import {useMatch} from "react-router-dom";

class ProfileContainer extends React.Component{
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>

        );
    }

    componentDidMount() {
    //let userId = this.props.match ? this.props.match.params.userId : '2';
    let userId = this.props.match ? this.props.match.params.userId : '2';
    //if (!userId) userId=2
        debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            this.props.setUserProfile(response.data)
        })
    }

}


/*********
 *
 */

// class ProfileAPI extends React.Component {
//     componentDidMount() {
//         let userId = this.props.match ? this.props.match.params.userId : '20875';
//         this.props.getProfileThunk(userId);
//     }
//     render() {
//         return (
//             <Profile {...this.props} />
//         )
//     }
// }

const ProfileMatchContainer = (props) => {
    let match = useMatch("/profile/:userId");
    return (
        <ProfileContainer {...props} match={match} />
    )
}

//export default connect(mapStateToProps, { addPost, updatePostArea, getProfileThunk })(ProfileMatch );
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

//const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer);
export default connect(mapStateToProps, {setUserProfile})(ProfileMatchContainer);
// export default ProfileContainer;