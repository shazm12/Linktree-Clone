import React from 'react';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

