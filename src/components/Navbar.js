import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    var title = "Cine Club";

    return (
      <div className="globalNAV">
        <img className="logo" src="./images/logo.png" alt="logo" />
        <h1>{title}</h1>
        <nav>
          <ul>
            <NavLink
              className={(nav) => (nav.isActive ? "navButtonActive" : "navButton")}
              to="/"
            >
              Acceuil
            </NavLink>
            <NavLink to="/films">Films</NavLink>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar;