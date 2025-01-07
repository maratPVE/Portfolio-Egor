import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navigation/navbar.css';

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Egor Krichko
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Accueil</Link></li>
          <li><Link to="/competences" className="nav-link">Compétences</Link></li>
          <li><Link to="/experience" className="nav-link">Expérience</Link></li>
          <li><Link to="/projets" className="nav-link">Projets</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
