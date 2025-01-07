import React from 'react';
import '../../styles/pages/projets.css';

function Projets() {
  const projets = [
    {
      titre: "Bot E-commerce Telegram",
      description: "Bot de vente en ligne intégrant Stripe pour les paiements et une base de données MySQL",
      image: "/images/bot-ecommerce.jpg",
      tags: ["Python", "MySQL", "Stripe", "Heroku", "Telegram API"],
      lien: "#"
    },
    {
      titre: "Bot Service Client IA",
      description: "Bot intelligent utilisant ChatGPT pour le support client automatisé",
      image: "/images/bot-support.jpg",
      tags: ["Python", "OpenAI API", "Flask", "Heroku", "Telegram API"],
      lien: "#"
    },
    {
      titre: "Portfolio Personnel",
      description: "Site web personnel présentant mes compétences et réalisations",
      image: "/images/portfolio.jpg",
      tags: ["React", "CSS3", "JavaScript", "Responsive Design"],
      lien: "#"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Projets</h2>
        <div className="projects-grid">
          {projets.map((projet, index) => (
            <div key={index} className="project-card">
              <img 
                src={projet.image} 
                alt={projet.titre} 
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{projet.titre}</h3>
                <p className="project-description">{projet.description}</p>
                <div className="project-tags">
                  {projet.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
