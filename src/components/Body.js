import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Auth/Login";
import { Browse } from "./Browse/Browse";
import Search from "./Browse/Search";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: '/search',
      element: <Search />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
