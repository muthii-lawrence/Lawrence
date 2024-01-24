import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
// import Landing from './pages/Landing';
import RootPage from './pages/Rootpage';
import Landing from './pages/Landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
      path: "/",
      element: <Landing />
    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);