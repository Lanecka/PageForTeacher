import React from 'react';
import Post from './Post/Post';
import style from './MyPosts.module.css';

const MyPosts = (postsProps) => {
  let postsElements =
    postsProps.posts.map(posts => <Post key={posts.id} id={posts.id} message={posts.message} />)
  let newPostText = postsProps.newPostText

  let newPostElement = React.createRef();

  let onAddPost = () => {
    postsProps.addPost()
  }

  let postOnChange = () => {
    let text = newPostElement.current.value
    postsProps.updateNewPost(text)
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
