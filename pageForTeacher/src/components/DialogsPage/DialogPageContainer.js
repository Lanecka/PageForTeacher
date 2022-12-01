import React from 'react';
import { addMessageActionCreation, updateNewMessageBoxActionCreation } from '../../redux/redusers/dialogsReduser'
import DialogsPage from './DialogsPage';

const DialogsPageContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreation())
  }

  let messageOnChange = (text) => {
    let action = updateNewMessageBoxActionCreation(text)
    props.store.dispatch(action)
  }

  return (
    <DialogsPage 
      updateNewMessage={messageOnChange}
      addMessage={addMessage}
      dialogsPage={state}
    />
  )
}

export default DialogsPageContainer;