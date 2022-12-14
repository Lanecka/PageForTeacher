import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReduser from "./redusers/dialogsReduser";
import profileReduser from "./redusers/profileReduser";
import usersReduser from "./redusers/usersReduser";

let reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser
});

let store = createStore(reducers);

export default store;