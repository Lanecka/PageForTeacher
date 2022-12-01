import { addPostActionCreation, updateNewPostActionCreation } from '../../../redux/redusers/profileReduser';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState()

  let addPost = () => {
    props.store.dispatch(addPostActionCreation())
  }

  let postOnChange = (text) => {
    let action = updateNewPostActionCreation(text)
    props.store.dispatch(action)
  }

  return (
    <MyPosts 
      updateNewPost={postOnChange} 
      addPost={addPost} 
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  )
}

export default MyPostsContainer;
