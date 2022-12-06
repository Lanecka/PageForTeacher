import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} />)
  let newPostText = props.newPostText

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  }

  let postOnChange = () => {
    let text = newPostElement.current.value
    props.updateNewPost(text)
  }

  return (
    <div className={style.posts}>
      <h2>Записи блога</h2>
      <div className={style.newItem}>
        <textarea 
          onChange={postOnChange} 
          placeholder="Новая запись" 
          ref={newPostElement} 
          value={newPostText} 
        />
        <div>
          <button onClick={onAddPost}>Отправить</button>
        </div>
      </div>
      <div className={style.published}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
