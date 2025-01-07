import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/accueil.css';

function Accueil() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Egor Krichko</h1>
          <p className="hero-subtitle">
            Futur Ingénieur CESI | À la recherche d'un stage en cybersécurité
          </p>
          <Link to="/contact" className="btn hero-cta">
            Me contacter
          </Link>

          <div className="profile-info">
            <div className="info-item">
              <i className="fas fa-envelope info-icon"></i>
              <span>hidex0912@gmail.com</span>
            </div>
            <div className="info-item">
              <i className="fas fa-phone info-icon"></i>
              <span>07 69 39 09 74</span>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt info-icon"></i>
              <span>Beausoleil (06240)</span>
            </div>
            <div className="info-item">
              <i className="fas fa-user info-icon"></i>
              <span>20 ans</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accueil;
