import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { apiSlice } from './features/api/apiSlice';
import './styles/index.scss';

function start() {
  store.dispatch(apiSlice.endpoints.getPosts.initiate());
  store.dispatch(apiSlice.endpoints.getUsers.initiate());

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

start();