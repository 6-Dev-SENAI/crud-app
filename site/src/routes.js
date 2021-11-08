import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home/home.js";
import Cadastrar from "./pages/Cadastrar/cadastrar.js";
import Alterar from "./pages/Alterar/alterar.js";
import Deletar from "./pages/Delete/delete.js";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/alterar/:id" element={<Alterar />} />
        <Route path="/deletar/:id" element={<Deletar />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
