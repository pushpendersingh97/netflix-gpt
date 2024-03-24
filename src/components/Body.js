import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Auth/Login";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
