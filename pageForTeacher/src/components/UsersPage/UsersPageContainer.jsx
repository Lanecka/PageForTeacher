import React from 'react';
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, setUsersTotalCount, togleISFetching, unFollow } from "../../redux/redusers/usersReduser";
import axios from 'axios';
import Users from './Users/Users';
import Preloader from '../common/Preloader/Preloader';

class UsersPageContainer extends React.Component {
  // Запрос к удаленным ресурсам (данным сервака: данные пользователей, их общее )
  componentDidMount() {
    this.props.togleISFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.togleISFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      })
  }

  /** Активирует кнопки переключения страниц, с передачей данных с сервака */
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.togleISFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.togleISFetching(false);
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps,
  {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    togleISFetching
  }
)(UsersPageContainer);