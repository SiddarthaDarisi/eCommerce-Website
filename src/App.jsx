import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MainSection } from "./components/Mainsection";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
