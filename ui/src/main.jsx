import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import RootPage from './pages/Rootpage';
import Landing from './pages/Landing';
// import Skills from './pages/Skills';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
      path: "/",
      element: <Landing />
    },
    // {
    //   path: "/skills",
    //   element: <Skills />
    // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);