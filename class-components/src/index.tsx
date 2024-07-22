import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <App />
        </QueryParamProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
