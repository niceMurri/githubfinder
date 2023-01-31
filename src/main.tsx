import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home';
import Repos from './pages/Repos';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/repos/:id', element: <Repos/>}
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
