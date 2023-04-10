import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Statistics from './components/Statistics'
import AppliedJobs from './components/AppliedJobs'
import Blog from './components/Blog'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      {
        path: 'statistics',
        element:<Statistics />
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs />
      },
      {
        path: 'blog',
        element: <Blog />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
