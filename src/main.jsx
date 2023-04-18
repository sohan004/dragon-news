import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Cetagory from './components/Cetagory/Cetagory'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/cetagory/:id',
        element: <Cetagory></Cetagory>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
