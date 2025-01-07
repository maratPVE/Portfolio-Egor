import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/bouton.css';

function Bouton({ children, to, externe, onClick, type = "button", className = "" }) {
  const classes = `btn ${className}`;

  if (to && !externe) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (to && externe) {
    return (
      <a 
        href={to} 
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Bouton;
