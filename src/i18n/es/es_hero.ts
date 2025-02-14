import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hola, mi nombre es Ben Brik Souhail',
  subtitle:
    'He dominado el arte de convertir el café en código y el caos en orden. Mi pasión por resolver problemas es igualada solo por mi amor por hacer panqueques caseros los domingos por la mañana.',
  name: 'John Phillip Doe',
  url: 'https://john-does.com/',
  contact_button: 'Contáctame',
  //Si un perfil tiene una cadena vacía '', el botón no se renderizará
  profiles: {
    linkedin: 'https://www.linkedin.com/in/souhail-ben-brik/',
    github: 'https://github.com/SOUHAILBENBRIK',
    youtube: 'https://www.youtube.com/@codegleam',
    twitter: '',
    instagram: '',
    facebook: ''
  },
  home: 'Inicio'
}

export default hero
