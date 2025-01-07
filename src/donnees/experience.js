const experiences = [
  {
    id: 1,
    titre: "Développeur de Bots",
    entreprise: "Freelance",
    lieu: "Dubai",
    periode: {
      debut: "2024-06",
      fin: "2024-07"
    },
    description: "Développement d'un bot Telegram pour une boutique de vêtements",
    technologies: ["Python", "MySQL", "Stripe", "Heroku", "Telegram API"],
    realisations: [
      "Intégration de paiements sécurisés via Stripe",
      "Mise en place d'une base de données MySQL",
      "Gestion de Webhooks avec Flask",
      "Déploiement sur Heroku"
    ]
  },
  {
    id: 2,
    titre: "Développeur Service Client",
    entreprise: "Freelance",
    lieu: "Dubai",
    periode: {
      debut: "2024-07",
      fin: "2024-08"
    },
    description: "Création d'un bot de service client sur Telegram",
    technologies: ["Python", "OpenAI API", "Heroku", "Telegram API"],
    realisations: [
      "Intégration de l'API OpenAI (ChatGPT-4)",
      "Automatisation des réponses clients",
      "Développement de flux conversationnels personnalisés"
    ]
  },
  {
    id: 3,
    titre: "Consultant en Collaboration Technique",
    entreprise: "Projet privé",
    periode: {
      debut: "2024-08",
      fin: "2024-08"
    },
    description: "Collaboration sur un projet de site de trading",
    realisations: [
      "Traduction des besoins métier",
      "Coordination entre équipes francophones et russophones",
      "Support technique bilingue"
    ]
  }
];

export default experiences;
