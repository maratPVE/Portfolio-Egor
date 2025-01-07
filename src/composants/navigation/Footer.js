import React from 'react';
import '../../styles/navigation/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://github.com/EgorKrichko" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/egor-krichko" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Egor Krichko. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
