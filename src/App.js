import React from "react";
import Login from "./Components/Login/Login";
import Cadastro from "./Components/Cadastro/Cadastro";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Login />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
