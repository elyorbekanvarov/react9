import React from "react";
import HomePage from "../src/pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AlbomsPage from "../src/pages/AlbomsPage";
import PublicLayout from "./layouts/PublicLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout></PublicLayout>,
      children: [
        {
          index: true,
          element: <HomePage></HomePage>,
        },
        {
          path: "/albom",
          element: <AlbomsPage></AlbomsPage>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}
export default App;
