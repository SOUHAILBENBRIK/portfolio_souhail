import type { Hero } from '@/types'

const hero: Hero = {
  title: 'Hello, my name is Souhail Ben Brik',
  subtitle:
    "I've mastered the art of turning coffee into code and chaos into order. My passion for solving problems is matched only by my love for making homemade pancakes on Sunday mornings.",
  name: 'John Phillip Doe',
  url: 'https://john-does.com/',
  contact_button: 'Get in touch',
  //If a profile hast an empty string '', the button wont be rendered
  profiles: {
    linkedin: 'https://www.linkedin.com/in/souhail-ben-brik/',
    github: 'https://github.com/SOUHAILBENBRIK',
    youtube: 'https://www.youtube.com/@codegleam',
    twitter: '',
    instagram: '',
    facebook: ''
  },
  home: 'Home'
}

export default hero
