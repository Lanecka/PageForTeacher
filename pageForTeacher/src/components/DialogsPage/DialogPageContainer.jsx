import { connect } from 'react-redux';
import { addMessage, updateNewMessageBox } from '../../redux/redusers/dialogsReduser'
import DialogsPage from './DialogsPage';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

/**
 * Контейнерная компонента, передает данные презентационной компоненте
 * где mapStateToProps- передает данные state
 * mapDispatchToProps- вызывает диспетчеров для добавления и обновления сообщений
 * DialogsPage- презентационная компонента
 */
const DialogsPageContainer = connect(mapStateToProps, 
  {
    addMessage, 
    updateNewMessageBox
  }
)(DialogsPage)

export default DialogsPageContainer;