import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { NotFound } from './view/404/404.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/search',
    element: <App />,
  },
  {
    path: '/search/:page',
    element: <App />,
    children: [
      {
        path: '/search/:page/:planet',
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
