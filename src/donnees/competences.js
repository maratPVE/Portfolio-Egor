const competences = {
  cybersecurite: {
    titre: "Cybersécurité et Réseaux",
    items: [
      {
        nom: "Gestion des accès",
        description: "Contrôle et sécurisation des accès aux systèmes"
      },
      {
        nom: "Protection des réseaux",
        description: "Configuration et maintenance de la sécurité réseau"
      },
      {
        nom: "Systèmes d'exploitation",
        description: "Windows, Linux, macOS, Android"
      },
      {
        nom: "Certification CCNA",
        description: "En cours de préparation"
      }
    ]
  },
  programmation: {
    titre: "Programmation",
    items: [
      {
        nom: "Python",
        niveau: "Avancé",
        domaines: ["Bots", "Scripts", "Automatisation"]
      },
      {
        nom: "C++",
        niveau: "Intermédiaire",
        domaines: ["POO", "Projets académiques"]
      },
      {
        nom: "Web Frontend",
        niveau: "Avancé",
        domaines: ["HTML5", "CSS3", "JavaScript", "React.js"]
      },
      {
        nom: "Web Backend",
        niveau: "Intermédiaire",
        domaines: ["Node.js", "Express.js", "PHP", "Django"]
      }
    ]
  },
  langues: [
    { langue: "Français", niveau: "C2" },
    { langue: "Russe", niveau: "C2" },
    { langue: "Anglais", niveau: "C1" },
    { langue: "Allemand", niveau: "B1" }
  ]
};

export default competences;
