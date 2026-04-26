import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './Redux-tool/createStore';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import App from './app';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

