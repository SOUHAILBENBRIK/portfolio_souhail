import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experiencia',
  description: 'Puedes ver mi currículum haciendo clic en el siguiente botón.',
  download_button: 'Descargar CV',
  present: 'Presente',
  month: 'mes | meses',
  year: 'año | años',
  list: [
    {
      "company": "ATS - Digital Dev",
      "position": "Desarrollador Full-stack JS",
      "url": "https://www.linkedin.com/posts/souhail-ben-brik_im-excited-to-share-that-ive-just-completed-activity-7236387402959773697-6Ba6",
      "startDate": "2024-06",
      "endDate": "2024-12",
      "highlights": [
        "Desarrollé una aplicación web full-stack (backend, frontend).",
        "Diseñé arquitecturas de bases de datos escalables y APIs seguras.",
        "Colaboré con el equipo para probar, depurar y desplegar el proyecto."
      ],
      "description": 
        "Construí una aplicación web completa utilizando React, Node.js, Express y MongoDB, enfocándome en el backend, frontend e integración de APIs. Diseñé estructuras de bases de datos eficientes y APIs seguras, utilizando Tailwind para el estilo."
    },
    {
      "company": "AzertyUI",
      "position": "Trabajo a tiempo parcial (Desarrollador Flutter)",
      "url": "https://www.azertyui.fr/",
      "startDate": "2024-09",
      "endDate": "2024-11",
      "highlights": [
        "Desarrollé aplicaciones Flutter responsivas y fáciles de usar con gestión de estado (GetX).",
        "Integré APIs RESTful para un manejo de datos fluido.",
        "Implementé soluciones de base de datos local (Hive) para almacenamiento offline."
      ],
      "description":
        "Desarrollé aplicaciones Flutter con GetX para la gestión de estado, integré APIs RESTful y utilicé Hive para almacenamiento offline. Construí interfaces fáciles de usar y diseños responsivos, asegurando un manejo fluido de datos y una experiencia de usuario óptima."
    },
    {
      "company": "Novation City",
      "position": "Pasantía de verano (Desarrollador Backend)",
      "url": "http://www.novationcity.com",
      "startDate": "2023-06",
      "endDate": "2023-08",
      "highlights": [
        "Desarrollé APIs RESTful utilizando Node.js y Express para manejo eficiente de datos y enrutamiento.",
        "Diseñé y optimicé bases de datos MongoDB para almacenamiento escalable.",
        "Implementé autenticación, autorización y seguridad basada en JWT en sistemas backend."
      ],
      "description": 
        "Desarrollé APIs RESTful con Node.js y Express, optimicé bases de datos MongoDB e implementé seguridad basada en JWT para la autenticación y autorización de usuarios."
    },
    {
      "company": "Iberis",
      "position": "Pasantía de fin de estudios (Desarrollador Flutter)",
      "url": "https://finances.iberis.io/fr",
      "startDate": "2022-02",
      "endDate": "2022-06",
      "highlights": [
        "Desarrollé aplicaciones Flutter responsivas y fáciles de usar con gestión de estado (Provider).",
        "Integré APIs RESTful para un manejo fluido de datos.",
        "Implementé localización (l10n) y soporte multilingüe en aplicaciones Flutter."
      ],
      "description":
        "Desarrollé la plataforma Iberis, una herramienta integral de gestión y facturación en línea, usando Flutter con gestión de estado (Provider). Integré APIs RESTful para manejo de datos y agregué soporte multilingüe para acceso global. La aplicación permite a los usuarios crear facturas, realizar un seguimiento de gastos, enviar recordatorios de pago y gestionar clientes y stock."
    }
    
  ]
}

export default experience
