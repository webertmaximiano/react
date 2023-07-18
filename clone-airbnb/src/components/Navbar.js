import React from 'react';
import logo from '../images/airbnb-logo.png'; // Importa a imagem corretamente

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Airbnb Logo" className="nav--logo" />
    </nav>
  );
}

export default Navbar;