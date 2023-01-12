import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../../redux/redusers/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    // второй параметр необходим, что мы зарегистрированны  
    withCredentials: true
    })
      .then(response => {
        // проверяем пользователя на регистрацию. 
        // Да-логин пользователя, нет- логин 
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          this.props.setAuthUserData(id, login, email)
        }
      })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);