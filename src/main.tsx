import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Layouts/AuthLayout/Signup";
import Login from "./Layouts/AuthLayout/Login";
import ResetPassword from "./Layouts/AuthLayout/ResetPassword";
import ValidatePassword from "./Layouts/AuthLayout/ValidatePassword";
import Home from "./components/Home";
import DashboardLayout from "./Layouts/Dashboad/DashboardLayout";
import Welcome from "./components/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/validate-password",
        element: <ValidatePassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/welcome",
        element: <Welcome />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
