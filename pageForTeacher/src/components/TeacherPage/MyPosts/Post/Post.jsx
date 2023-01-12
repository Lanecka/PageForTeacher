import style from './Post.module.css'

const Post = ({ message }) => {
  return (
    <div className={style.item}>
      <img src="https://delatdelo.com/wp-content/uploads/2019/06/33.1.jpg"></img>
      <p>{ message }</p>
    </div>
  )
}

export default Post;