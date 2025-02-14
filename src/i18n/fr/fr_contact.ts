import type { Contact } from '@/types'

const contact: Contact = {
  title: 'Contact',
  description:
    'Si vous souhaitez me contacter, vous pouvez le faire via mes réseaux sociaux ou par e-mail.',
  social: 'Voici mes comptes de réseaux sociaux et mon adresse e-mail :',
  //Gardez les crochets et les guillemets autour de @ -> {'@'}
  email: "benbriksouhail43{'@'}mail.com",
  copy: 'Copier',
  copied: 'Copié',
  form: 'Vous pouvez également utiliser ce formulaire pour m\'envoyer un message :',
  name_label: 'Nom',
  name_placeholder: 'Entrez votre nom',
  email_label: 'E-mail',
  email_placeholder: 'Entrez votre e-mail',
  message_label: 'Message',
  message_placeholder: 'Entrez votre message',
  send: 'Envoyer le message',
  sending: 'Envoi...',
  restriction: 'Vous pouvez envoyer un message toutes les 30 minutes, veuillez patienter.'
}

export default contact
