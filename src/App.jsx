import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./conponetes/home";
import About from "./conponetes/about";
import TodoList from "./conponetes/TodoList";
import Navegacion from "./conponetes/navegacion";

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
