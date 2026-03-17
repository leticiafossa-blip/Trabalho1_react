import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">Início</Link>
        <Link to="/hospedes">Listar Hóspedes</Link>
        <Link to="/hospedes/novo">Novo Cadastro</Link>
      </div>
    </nav>
  );
}

export default Navbar;