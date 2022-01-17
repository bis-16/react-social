import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../myRedux/authReducer";

const baseUrl = "https://social-network.samuraijs.com/api/1.0"

class HeaderContainer extends React.Component{

    render() {
        return <Header {...this.props} />
    }

    componentDidMount(){
        axios.get(`${baseUrl}/auth/me`, {withCredentials: true})
        // axios.get(`${baseUrl}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                //this.props.setUserData(response.data.items)
                debugger
            })
    }

}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);