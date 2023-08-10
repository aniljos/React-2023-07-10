import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { reduxStore } from './redux/store'
import { AppStoreContext, initialState } from './context/AppStoreContext';
import './axios/interceptor';
import AppErrorBoundary from './error-boundary/AppErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <AppStoreContext.Provider value={initialState}>
    <Provider store={reduxStore}>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
    </Provider>
  </AppStoreContext.Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
