import { connect } from "react-redux";
import { followActionCreation, setUsersActionCreation, unFollowActionCreation } from "../../redux/redusers/usersReduser";
import UsersPageC from "./UsersPageC";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreation(userId))
    },
    unfollow: (userId) => {
      dispatch(unFollowActionCreation(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreation(users))
    }
  }
}

const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPageC)

export default UsersPageContainer;