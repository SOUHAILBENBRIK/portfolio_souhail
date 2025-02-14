import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projets',
  source: 'GitHub',
  website: 'Site Web',
  main: [
    {
      name: 'Vuefolio',
      techstack: ['Vuejs', 'i18n', 'TypeScript', 'Tailwind CSS'],
      image: 'vuefolio_cover.webp',
      description:
        "Un modèle de portfolio construit avec Vue.js, i18n et TypeScript. Il est hautement personnalisable, facile à configurer et optimisé pour la performance, le SEO et l'accessibilité.",
      src: 'https://github.com/ralodev/vuefolio',
      url: 'https://vuefolio.netlify.app/'
    },
    {
      name: 'AlienSignalDetector',
      techstack: ['Morse', 'Windows 95', 'WebAssembly', 'Firebase'],
      image: 'project_cover.webp',
      description:
        "Application révolutionnaire utilisant les dernières technologies web pour analyser le rayonnement de fond cosmique à la recherche de signaux extraterrestres. Parfait pour les astronomes amateurs et les passionnés de science-fiction souhaitant être les premiers à tweeter sur un contact extraterrestre.",
      src: 'https://github.com/johndoe/aliensignaldetector',
      url: 'https://detect-alien-signals-now.com/'
    },
    {
      name: 'QuantumCoffeeBrewer',
      techstack: ['Quantum Computing', 'Q#', 'Azure', 'Amazon S3'],
      image: 'project_cover.webp',
      description:
        "Exploitez la puissance du calcul quantique pour préparer la tasse de café parfaite. Cette application calcule la température et le temps d'infusion optimaux en fonction de la mécanique quantique, promettant les molécules de caféine les plus intriquées et en superposition.",
      src: 'https://github.com/johndoe/quantumcoffeebrewer',
      url: 'https://quantumcoffeebrewer.com/'
    }
  ],
  // Vous pouvez laisser ce tableau vide
  other: [
    {
      name: 'MemeGeneratorX',
      techstack: ['Binaire', 'Notepad++', 'MS Paint'],
      description:
        "Un outil avancé alimenté par l'IA qui génère des mèmes personnalisés en fonction de votre humeur. Dites-lui simplement ce que vous ressentez, et il fera le reste. Idéal pour ceux qui ont du mal à exprimer leurs émotions avec des mots.",
      url: 'https://github.com/johndoes/MemeGeneratorX',
      src: 'https://github.com/johndoes/MemeGeneratorX'
    },
    {
      name: 'VirtualBakeOff',
      techstack: ['Blackberry Notes App', 'MSDOS'],
      description:
        "Plongez dans un univers virtuel où vous pouvez participer à des compétitions de pâtisserie exaltantes depuis votre propre cuisine ! Grâce aux technologies VR de pointe, créez des gâteaux et des pâtisseries numériques qui émerveilleront mortels et divinités. Une IA, experte en émissions culinaires et en dessins animés comme Futurama et Les Simpson, jugera vos créations.",
      url: 'https://github.com/johndoes/VirtualBakeOff',
      src: 'https://github.com/johndoes/VirtualBakeOff'
    },
    {
      name: 'SleepyTimeScheduler',
      techstack: ['Ruby', 'Iconify', 'Rust'],
      description:
        "Un planificateur dynamique basé sur un algorithme qui décide quand vous devez dormir en fonction de votre activité sur les réseaux sociaux. Pourquoi décider vous-même quand dormir alors qu'une application peut le faire pour vous ?",
      url: 'https://github.com/johndoes/SleepyTimeScheduler',
      src: 'https://github.com/johndoes/SleepyTimeScheduler'
    },
    {
      name: 'PlantWhisperer',
      techstack: ['Kotlin', 'Spark AR', 'Blogger', 'Blender'],
      description:
        "Une application pour les amoureux des plantes qui traduit leurs besoins en langage compréhensible. Vous vous demandez si votre fougère a soif ou si votre cactus se sent seul ? PlantWhisperer vous dira ce qu'ils pensent vraiment !",
      url: 'https://github.com/johndoes/PlantWhisperer',
      src: 'https://github.com/johndoes/PlantWhisperer'
    }
  ]
}

export default projects