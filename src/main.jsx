import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {ComponentList, LoginPage} from './pages'
import Employers from './board-pages/employers.page.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/employers",
        element:<Employers/>
      },
      
    ]
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/component-list",
    element:<ComponentList/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
