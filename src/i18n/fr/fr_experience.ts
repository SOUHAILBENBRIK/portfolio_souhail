import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Expérience',
  description: 'Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous.',
  download_button: 'Télécharger le CV',
  present: 'Présent',
  month: 'mois | mois',
  year: 'an | ans',
  list: [
    {
      "company": "ATS - Digital Dev",
      "position": "Développeur Full-stack JS",
      "url": "https://www.linkedin.com/posts/souhail-ben-brik_im-excited-to-share-that-ive-just-completed-activity-7236387402959773697-6Ba6",
      "startDate": "2024-06",
      "endDate": "2024-12",
      "highlights": [
        "Développement d'une application web full-stack (backend, frontend).",
        "Conception d'architectures de bases de données évolutives et d'API sécurisées.",
        "Collaboration avec l'équipe pour tester, déboguer et déployer le projet."
      ],
      "description": 
        "Création d'une application web complète en utilisant React, Node.js, Express et MongoDB, en se concentrant sur le backend, le frontend et l'intégration d'API. Conception de structures de bases de données efficaces et d'API sécurisées, avec l'utilisation de Tailwind pour le style."
    },
    {
      "company": "AzertyUI",
      "position": "Emploi à temps partiel (Développeur Flutter)",
      "url": "https://www.azertyui.fr/",
      "startDate": "2024-09",
      "endDate": "2024-11",
      "highlights": [
        "Création d'applications Flutter réactives et conviviales avec gestion d'état (GetX).",
        "Intégration d'API RESTful pour une gestion des données fluide.",
        "Mise en place de solutions de base de données locales (Hive) pour le stockage hors ligne."
      ],
      "description":
        "Développement d'applications Flutter avec GetX pour la gestion d'état, intégration d'API RESTful et utilisation de Hive pour le stockage hors ligne. Conception d'interfaces conviviales et réactives, assurant une gestion fluide des données et une expérience utilisateur optimale."
    },
    {
      "company": "Novation City",
      "position": "Stage d'été (Développeur Backend)",
      "url": "http://www.novationcity.com",
      "startDate": "2023-06",
      "endDate": "2023-08",
      "highlights": [
        "Développement d'API RESTful avec Node.js et Express pour une gestion efficace des données et du routage.",
        "Conception et optimisation de bases de données MongoDB pour un stockage des données évolutif.",
        "Mise en œuvre de l'authentification, de l'autorisation et de la sécurité basée sur JWT dans les systèmes backend."
      ],
      "description": 
        "Développement d'API RESTful avec Node.js et Express, optimisation des bases de données MongoDB et implémentation de la sécurité basée sur JWT pour l'authentification et l'autorisation des utilisateurs."
    },
    {
      "company": "Iberis",
      "position": "Stage de fin d'études (Développeur Flutter)",
      "url": "https://finances.iberis.io/fr",
      "startDate": "2022-02",
      "endDate": "2022-06",
      "highlights": [
        "Création d'applications Flutter réactives et conviviales avec gestion d'état (Provider).",
        "Intégration d'API RESTful pour une gestion fluide des données.",
        "Mise en œuvre de la localisation (l10n) et du support multilingue dans les applications Flutter."
      ],
      "description":
        "Développement de la plateforme Iberis, un outil complet de gestion et de facturation en ligne, en utilisant Flutter avec gestion d'état (Provider). Intégration d'API RESTful pour la gestion des données et ajout du support multilingue pour une utilisation à l'échelle mondiale. L'application permet aux utilisateurs de créer des factures, de suivre les dépenses, d'envoyer des rappels de paiement et de gérer les clients et le stock."
    }
    
  ]
}

export default experience
