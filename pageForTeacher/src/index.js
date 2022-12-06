import ReactDOM from 'react-dom/client';
import reportWebVitals from './DELETE/reportWebVitals';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/storeRedux';
import { Provider } from 'react-redux';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
