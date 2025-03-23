import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Rootpage";
import Landing from "./pages/Landing";
import { Reviews } from "./pages/Reviews";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticlesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },{
      
      path: "/articles",
      element: <Articles />,
    },
    {
      
      path: "/article/:id",
      element: <ArticleDetails />,
    },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
