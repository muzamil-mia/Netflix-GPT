import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {

  const appRoter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/browse",
        element: <Browse/>,
      }
    ]
  )

  return (
    <div>
      <RouterProvider router = {appRoter}/>
    </div>
  )
}

export default Body