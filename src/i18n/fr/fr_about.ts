import type { About } from '@/types'

const about: About = {
  title: 'À propos',
  summary:
    'Par jour ☀️, je suis un développeur passionné de tech qui transforme le code en solutions. Par nuit 🌙, je jongle entre anime, échecs et appréciation de mèmes.\nBoosté par le café ☕ et ma passion pour la tech, j’automatise, j’innove et je rêve de me déployer dans l’espace. 🚀♟️💻',
  education: {
    title: 'Éducation',
    list: [
      {
        title: 'Licence en Technologies de l\'Information et de Communication',
        institution: 'Faculté des Sciences Mathématiques, Physiques et Naturelles de Tunis',
        url: 'https://fst.rnu.tn/en',
        description:
        'J\'ai obtenu une Licence en Technologies de l\'Information et de la Communication, où j\'ai acquis des compétences en réseaux, électronique, IoT, sécurité, traitement du signal et développement.',
        startDate: '2019-09',
        endDate: '2022-06',
        courses: [
          'Sécurité des Réseaux',
          'Internet des Objets (IoT)',
          'Télécommunications'
        ]
      },
      {
        title: 'Diplôme d\'Ingénieur en Génie des Télécommunications',
        institution: 'École Nationale d\'Ingénieurs de Sousse',
        url: 'http://www.eniso.rnu.tn/fr/',
        description:
          "Dans mon parcours en Génie des Télécommunications embarquées, j'ai maîtrisé le traitement du signal, DevOps, la cybersécurité, l'informatique en nuage, les systèmes de communication, ainsi que le développement mobile et web",
          startDate: '2022-09',
          endDate: '2025-07',
        courses: ['DevOps', 'Cloud', 'Sécurité', 'Internet des Objets (IoT)', 'Réseau']
      }
    ]
  },
  achievements: {
    title: 'Réalisations',
    list: [
      {
        title: "Création de la chaîne YouTube - Code Gleam",
        date: '2024-10',
        url: 'https://www.youtube.com/@codegleam',
        awarder: 'Auto-initié',
        summary: "Lancement de la chaîne YouTube 'Code Gleam' axée sur les tutoriels de développement et le contenu technologique, visant à éduquer et inspirer un public croissant."
      },
      {
        title: "Victoire au Hackathon avec Digital Dev",
        date: '2024-04',
        url: 'https://www.linkedin.com/posts/ats---digital-dev_hackathon-problemsolving-technologie-activity-7202232389002006529-xwSD/',
        awarder: 'ATS - Digital Dev',
        summary: "Obtention de la première place lors d'un hackathon compétitif organisé par ATS - Digital Dev."
      },
      {
        title: "Responsable du Département Mobile au Orange Tech Club ENISO",
        date: '2023-09/2024-06',
        url: 'https://www.linkedin.com/posts/souhail-ben-brik_clubs-orange-letabrsabrtechabrtheabrworldabrtogether-activity-7220344217997307905-tYZJ',
        awarder: 'Orange Tech Club ENISO',
        summary: "Direction de l'équipe de développement mobile, en coordonnant des ateliers et des projets qui ont favorisé le développement des compétences en mobile parmi les étudiants universitaires."
      },
      {
        title: "Trésorier d'Eureka ENISO",
        date: '2023-09/2024-06',
        url: 'https://www.facebook.com/eureka.eniso/',
        awarder: 'Eureka ENISO',
        summary: "Gestion des finances d'Eureka, supervisant l'organisation d'événements et favorisant l'innovation et l'entrepreneuriat à l'ENISO."
      }
      
    ]
  }
}

export default about
