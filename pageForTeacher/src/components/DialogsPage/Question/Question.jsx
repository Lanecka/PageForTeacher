import style from '../DialogsPage.module.css';

const Question = ({ message }) => {
  return (
    <div className={style.message}>
      <div className={style.text}>
        {message}
      </div>
    </div>
  )
}

export default Question;