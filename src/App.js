import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter";
import NavbarComp from "./components/NavbarComp";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <AppRouter />
    </BrowserRouter>
  )
};

export default App
