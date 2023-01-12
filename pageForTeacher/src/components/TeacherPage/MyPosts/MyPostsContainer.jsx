import { connect } from 'react-redux';
import { updateNewPost, addPost } from '../../../redux/redusers/profileReduser';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

/**
 * Контейнерная компонента, передает данные презентационной компоненте
 * где mapStateToProps- передает данные state
 * mapDispatchToProps- вызывает диспетчеров для добавления и обновления сообщений поста
 * MyPosts- презентационная компонента
 */
const MyPostsContainer = connect(mapStateToProps,
  {
    updateNewPost,
    addPost
  }
)(MyPosts)

export default MyPostsContainer;
