import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import GoDigging from "./pages/GoDigging";
import Data from "./pages/Data";
import DinosaurDetailView from "./pages/DinosaurDetailView";
import Error from "./pages/Error";
// Styles
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/go-digging",
        element: <GoDigging />,
      },
      {
        path: "/data",
        element: <Data />,
      },
      {
        path: "/dinosaur/:dinosaurName",
        element: <DinosaurDetailView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
