import React from 'react';
import Question from './Question/Question';
import StudentChoose from './StudentChoose/StudentChoose';
import style from './DialogsPage.module.css';

/**
 * Контейнерная компонента, 
 * служит для отрисовки презентациоонной компоненты
 * и удовлетворить ее необходимыми данными
 */
const DialogsPage = (dialogsProps) => {
  let state = dialogsProps.dialogsPage;

  let studentsElements = state.studentsList.map(student => <StudentChoose key={student.id} id={student.id} name={student.name} img={student.img} />)
  let studentQuestion = state.messagesList.map(question => <Question key={question.id} id={question.id} message={question.message} />)
  let newMessageText = state.newMessageText

  let onAddMessage = () => {
    dialogsProps.addMessage()
  }

  let newMessageOnChange = (e) => {
    let text = e.target.value
    dialogsProps.updateNewMessageBox(text)
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