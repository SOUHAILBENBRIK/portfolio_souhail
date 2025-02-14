import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Bonjour, je m’appelle Ben Brik Souhail',
  subtitle:
    "J'ai maîtrisé l'art de transformer le café en code et le chaos en ordre. Ma passion pour résoudre les problèmes n'a d'égal que mon amour pour la préparation de crêpes maison le dimanche matin.",
  name: 'John Phillip Doe',
  url: 'https://john-does.com/',
  contact_button: 'contactez moi',
  // Si un profil a une chaîne vide '', le bouton ne sera pas affiché
  profiles: {
    linkedin: 'https://www.linkedin.com/in/souhail-ben-brik/',
    github: 'https://github.com/SOUHAILBENBRIK',
    youtube: 'https://www.youtube.com/@codegleam',
    twitter: '',
    instagram: '',
    facebook: ''
  },
  home: 'Accueil'
}

export default hero