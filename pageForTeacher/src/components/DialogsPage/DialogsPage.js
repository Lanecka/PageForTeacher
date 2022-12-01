import React from 'react';
import Question from './Question/Question';
import StudentChoose from './StudentChoose/StudentChoose';
import style from './DialogsPage.module.css';

/**
 * Контейнерная компонента, 
 * служит для отрисовки презентациоонной компоненты
 * и удовлетворить ее необходимыми данными
 */
const DialogsPage = (props) => {
  let state = props.dialogsPage;

  let studentsElements = state.studentsList.map(s => <StudentChoose id={s.id} name={s.name} img={s.img} />)
  let studentQuestion = state.messagesList.map(q => <Question id={q.id} message={q.message} />)
  let newMessageText = state.newMessageText

  let onAddMessage = () => {
    props.addMessage()
  }

  let newMessageOnChange = (e) => {
    let text = e.target.value
    props.updateNewMessage(text)
  }

  return (
    <div className={style.questions}>
      <header>
        <h2>Вопросы учеников</h2>
      </header>
      <div className={style.dialogs}>
        <div className={style.students}>
          {studentsElements}
        </div>
        <div className={style.messages}>
          {studentQuestion}
          <div className="addMessage">
            <textarea
              onChange={newMessageOnChange}
              placeholder="Введите сoобщение"
              value={newMessageText}
            />
            <div>
              <button onClick={onAddMessage}>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DialogsPage;