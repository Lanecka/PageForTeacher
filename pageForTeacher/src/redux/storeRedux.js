import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReduser from "./redusers/dialogsReduser";
import profileReduser from "./redusers/profileReduser";

let reducers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser
});

let store = createStore(reducers);

export default store;