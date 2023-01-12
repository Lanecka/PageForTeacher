import { combineReducers, legacy_createStore as createStore } from 'redux';
import authReduser from './redusers/authReducer';
import dialogsReduser from './redusers/dialogsReduser';
import profileReduser from './redusers/profileReduser';
import profileUserReduser from './redusers/profileUserReduser';
import usersReduser from './redusers/usersReduser';

let reducers = combineReducers({
  profilePage: profileReduser, // страница учителя
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  profileUser: profileUserReduser, // страница пользователя
  auth: authReduser
});

let store = createStore(reducers);

export default store;