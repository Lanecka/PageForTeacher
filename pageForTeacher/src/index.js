import ReactDOM from 'react-dom/client';
import reportWebVitals from './DELETE/reportWebVitals';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/storeRedux';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
});

reportWebVitals();
