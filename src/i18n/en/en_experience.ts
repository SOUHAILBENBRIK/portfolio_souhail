import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume by clicking the button below.',
  download_button: 'Download CV',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'ATS - Digital Dev',
      position: 'Full-stack JS Developper',
      url: 'https://www.linkedin.com/posts/souhail-ben-brik_im-excited-to-share-that-ive-just-completed-activity-7236387402959773697-6Ba6',
      startDate: '2024-06',
      endDate: '2024-12',
      highlights: [
        'Developed a full-stack web application (backend, frontend).',
        'Designed scalable database architecture and secure APIs.',
        'Collaborated with the team to test, debug, and deploy the project.'
      ],
      description:
        "Built a complete web application using React, Node.js, Express, and MongoDB, with a focus on the backend, frontend, and API integration. Designed efficient database structures and secure APIs, leveraging Tailwind for styling."
    },
    {
      company: 'AzertyUI',
      position: 'Part time Job ( Flutter Developper)',
      url: 'https://www.azertyui.fr/',
      startDate: '2024-09',
      endDate: '2024-11',
      highlights: [
        'Built responsive and user-friendly Flutter apps with state management (GetX)',
        'Integrated RESTful APIs for seamless data handling.',
        'Implemented local database solutions (Hive) for offline data storage.'
      ],
      description:
        'Developed Flutter apps with GetX for state management, integrated RESTful APIs, and used Hive for offline storage. Built user-friendly interfaces and responsive designs, ensuring seamless data handling and a smooth user experience.'
    },
    {
      "company": "Novation City",
      "position": "Summer Internship (Backend Developer)",
      "url": "http://www.novationcity.com",
      "startDate": "2023-06",
      "endDate": "2023-08",
      "highlights": [
        "Developed RESTful APIs using Node.js and Express for efficient data handling and routing.",
        "Designed and optimized MongoDB databases for scalable data storage.",
        "Implemented user authentication, authorization, and JWT-based security in backend systems."
      ],
      "description":
        "Developed RESTful APIs with Node.js and Express, optimized MongoDB databases, and implemented JWT-based security for user authentication and authorization."
    },
    {
      "company": "iberis",
      "position": "End of Study Internship (Flutter Developer)",
      "url": "https://finances.iberis.io/fr",
      "startDate": "2022-02",
      "endDate": "2022-06",
      "highlights": [
        "Built responsive and user-friendly Flutter apps with state management (Provider).",
        "Integrated RESTful APIs for seamless data handling.",
        "Implemented localization (l10n) and multi-language support in Flutter apps."
      ],
      "description":
        "Developed the Iberis platform, a comprehensive online invoicing and management tool, using Flutter with state management (Provider). Integrated RESTful APIs for data handling and added multi-language support to enable global access. The app allows users to create invoices, track expenses, send payment reminders, and manage clients and stock."
    }
    
  ]
}

export default experience
