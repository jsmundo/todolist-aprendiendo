import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/todo">Lista de Tareas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacion;
