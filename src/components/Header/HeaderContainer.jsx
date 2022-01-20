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
        //debugger
        axios.get(`${baseUrl}/auth/me`, {
            withCredentials: true //Для того, чтобы ваша авторизационная cookie цеплялась к запросам
        })

        // axios.get(`${baseUrl}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                //this.props.setUserData(response.data.items)
                if (response.data.resultCode === 0) { // 0 = it's cool, значит залогинен
                    //debugger
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)  //тогда диспатчим эти авторизационные данные
                }
                //debugger
            })
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);