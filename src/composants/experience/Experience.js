import React from 'react';
import '../../styles/pages/experience.css';

function Experience() {
  const experiences = [
    {
      titre: "Développeur de Bots",
      entreprise: "Freelance",
      lieu: "Dubai",
      periode: "Juin 2024 - Juillet 2024",
      description: "Développement d'un bot Telegram pour une boutique de vêtements, utilisant le framework python-telegram-bot avec une base de données MySQL. Hébergement du bot sur Heroku, intégration de paiements sécurisés via Stripe, et gestion de Webhooks avec Flask."
    },
    {
      titre: "Développeur Service Client",
      entreprise: "Freelance",
      lieu: "Dubai",
      periode: "Juillet 2024 - Août 2024",
      description: "Création d'un bot de service client sur Telegram, hébergé sur Heroku, et intégrant l'API OpenAI pour utiliser ChatGPT-4. Automatisation des réponses clients avec des flux conversationnels personnalisés."
    },
    {
      titre: "Consultant en Collaboration Technique",
      entreprise: "Projet privé",
      lieu: "",
      periode: "Août 2024",
      description: "Collaboration avec une équipe de développement web pour un projet de site de trading, connectant un client francophone avec une équipe de développeurs russophones. Traduction des besoins métier et techniques entre les deux parties."
    },
    {
      titre: "Ingénieur informatique",
      entreprise: "CESI",
      lieu: "Nice",
      periode: "Depuis septembre 2023",
      description: "Classe préparatoire 2ᵉ année – Informatique"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Expérience Professionnelle</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <p className="timeline-date">{exp.periode}</p>
                <h3 className="timeline-title">{exp.titre}</h3>
                <p className="timeline-location">
                  {exp.entreprise} {exp.lieu && `- ${exp.lieu}`}
                </p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
