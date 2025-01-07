import React from 'react';
import '../../styles/pages/competences.css';

function Competences() {
  const competences = {
    cybersecurite: [
      "Gestion des accès",
      "Protection des réseaux",
      "Sécurisation des données",
      "Windows, Linux, macOS, Android",
      "Certification CCNA en cours"
    ],
    programmation: [
      "Python (Bots, Scripts)",
      "C++ (POO)",
      "HTML5/CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Node.js",
      "Express.js",
      "PHP",
      "Django"
    ],
    outils: [
      "Git/GitHub",
      "Docker",
      "Heroku",
      "Power BI",
      "GLPI",
      "Telnet",
      "VPN"
    ],
    langues: [
      { langue: "Français", niveau: "C2" },
      { langue: "Russe", niveau: "C2" },
      { langue: "Anglais", niveau: "C1" },
      { langue: "Allemand", niveau: "B1" }
    ]
  };

  return (
    <section className="section skills-section">
      <div className="container">
        <h2>Compétences</h2>
        <div className="skills-grid">
          {/* Cybersécurité */}
          <div className="skill-category">
            <h3>Cybersécurité et Réseaux</h3>
            <ul className="skill-list">
              {competences.cybersecurite.map((skill, index) => (
                <li key={index} className="skill-item">
                  <i className="fas fa-shield-alt skill-icon"></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Programmation */}
          <div className="skill-category">
            <h3>Programmation</h3>
            <ul className="skill-list">
              {competences.programmation.map((skill, index) => (
                <li key={index} className="skill-item">
                  <i className="fas fa-code skill-icon"></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Outils */}
          <div className="skill-category">
            <h3>Outils</h3>
            <ul className="skill-list">
              {competences.outils.map((skill, index) => (
                <li key={index} className="skill-item">
                  <i className="fas fa-tools skill-icon"></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Langues */}
        <h3>Langues</h3>
        <div className="languages-grid">
          {competences.langues.map((langue, index) => (
            <div key={index} className="language-card card">
              <h4>{langue.langue}</h4>
              <p className="language-level">{langue.niveau}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competences;
