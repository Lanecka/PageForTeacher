import { connect } from 'react-redux';
import { addMessageActionCreation, updateNewMessageBoxActionCreation } from '../../redux/redusers/dialogsReduser'
import DialogsPage from './DialogsPage';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreation());
    },
    updateNewMessage: (text) => {
      dispatch(updateNewMessageBoxActionCreation(text));
    }
  }
}

/**
 * Контейнерная компонента, передает данные презентационной компоненте
 * где mapStateToProps- передает данные state
 * mapDispatchToProps- вызывает диспетчеров для добавления и обновления сообщений
 * DialogsPage- презентационная компонента
 */
const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage)

export default DialogsPageContainer;