import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {ComponentList} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path:"/component-list",
    element:<ComponentList/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
