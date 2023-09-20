import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Table from './Table.jsx';
import Team from './Team.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path:"/table",
    element:<Table/>,
  },
  {
    path:"/team",
    element:<Team/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
