import { connect } from 'react-redux';
import { addPostActionCreation, updateNewPostActionCreation } from '../../../redux/redusers/profileReduser';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPost: (text) => {
      dispatch(updateNewPostActionCreation(text))
    },
    addPost: () => {
      dispatch(addPostActionCreation())
    }
  }
}

/**
 * Контейнерная компонента, передает данные презентационной компоненте
 * где mapStateToProps- передает данные state
 * mapDispatchToProps- вызывает диспетчеров для добавления и обновления сообщений поста
 * MyPosts- презентационная компонента
 */
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
