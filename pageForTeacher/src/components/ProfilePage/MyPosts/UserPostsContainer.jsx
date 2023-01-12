import { connect } from 'react-redux';
import { updateNewUserPost, addUserPost } from '../../../redux/redusers/profileUserReduser';
import UserPosts from './UserPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profileUser.posts,
    newPostUserText: state.profileUser.newPostUserText
  }
}

/**
 * Контейнерная компонента, передает данные презентационной компоненте
 * где mapStateToProps- передает данные state
 * mapDispatchToProps- вызывает диспетчеров для добавления и обновления сообщений поста
 * MyPosts- презентационная компонента
 */
const UserPostsContainer = connect(mapStateToProps,
  {
    updateNewUserPost,
    addUserPost
  }
)(UserPosts)

export default UserPostsContainer;
