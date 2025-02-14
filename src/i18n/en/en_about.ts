import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary:
    "By day ☀️, I'm a tech-loving developer turning code into solutions.\nBy night 🌙, I juggle anime, chess, and meme appreciation.\nFueled by coffee ☕ and a passion for tech, I automate, innovate, and dream of deploying myself to space. 🚀♟️💻",
  education: {
    title: 'Education',
    list: [
      {
        title: 'Bachelor\'s Degree in Information and Communication Technologies',
        institution: 'Faculty of Mathematical, Physical, and Natural Sciences of Tunis',
        url: 'https://fst.rnu.tn/en',
        description:
          'I earned a Bachelor\'s degree in Information and Communication Technologies, gaining skills in networks, electronics, IoT, security, signal processing, and development.',
          startDate: '2019-09',
          endDate: '2022-06',
        courses: [
          'Network Security',
          'Internet of Things (IoT)',
          'Telecommunication'
        ]
      },
      {
        title: 'Engineer\'s Degree in Telecommunications Engineering',
        institution: 'National School of Engineers of Sousse',
        url: 'http://www.eniso.rnu.tn/fr/',
        description:
          "During my Embedded Telecommunications Engineering journey, I’ve mastered signal processing, DevOps, cybersecurity, cloud computing, communication systems, and mobile and web development.",
        startDate: '2022-09',
        endDate: '2025-07',
        courses: ['DevOps', 'Cloud ', 'Security', 'Internet of Things (IoT)', 'Network']
      }
    ]
  },
  achievements: {
    title: 'Achievements',
    list: [
      {
        title: "Created YouTube Channel - Code Gleam",
        date: '2024-10',
        url: 'https://www.youtube.com/@codegleam',
        awarder: 'Self-initiated',
        summary: "Launched the 'Code Gleam' YouTube channel focused on development tutorials and tech-related content, aiming to educate and inspire a growing audience."
      },
      {
        title: "Won Hackathon with Digital Dev",
        date: '2024-04',
        url: 'https://www.linkedin.com/posts/ats---digital-dev_hackathon-problemsolving-technologie-activity-7202232389002006529-xwSD/',
        awarder: 'ATS - Digital Dev',
        summary: "Secured first place in a competitive hackathon organized by ATS - Digital Dev"
      },
      {
        title: "Head of Mobile Department at Orange Tech Club ENISO",
        date: '2023-09/2024-06',
        url: 'https://www.linkedin.com/posts/souhail-ben-brik_clubs-orange-letabrsabrtechabrtheabrworldabrtogether-activity-7220344217997307905-tYZJ',
        awarder: 'Orange Tech Club ENISO',
        summary: "Led the mobile development team, coordinating workshops and projects that fostered mobile development skills among university students."
      },
      {
        title: "Treasurer of Eureka ENISO",
        date: '2023-09/2024-06',
        url: 'https://www.facebook.com/eureka.eniso/',
        awarder: 'Eureka ENISO',
        summary: "Managed the finances for Eureka, overseeing event organization and fostering innovation and entrepreneurship at ENISO."
      }
    ]
  }
}

export default about
