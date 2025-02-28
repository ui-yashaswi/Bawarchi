import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "@fontsource/quattrocento"; 



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
