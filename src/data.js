import {
  PatrickLemmerDevWebsite,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Twitter,
  GitHub,
  Instagram,
} from './assets'

export const portfolioData = [
  {
    title: 'Portfolio Website',
    thumbnail: PatrickLemmerDevWebsite,
    alt: 'A photo of the website I created for a software developer.',
    category: 'Web Development, Web Design',
    link: 'work/patricklemmerdev',
  },
  {
    title: 'Mobile App',
    thumbnail: Portfolio2,
    alt: 'A photo of the landing page I have created for a start-up business',
    category: 'Mobile Development, Mobile Design, Branding',
    link: 'work/confido-app',
  },
  {
    title: 'NGO Website',
    thumbnail: Portfolio3,
    alt: 'A photo of the website I have created for a non-profit organization.',
    category: 'Web Development, Web Design, Branding',
    link: 'work/all-for-wolves',
  },
  {
    title: 'Business Website',
    thumbnail: Portfolio4,
    alt: 'A photo of the website I created for the Dietitian Cara',
    category: 'Web Development, Web Design, Photography',
    link: 'work/health-coach',
  },
]

export const socials = [
  {
    name: 'Twitter',
    icon: Twitter,
    alt: 'Follow me on Twitter',
    link: 'https://twitter.com/patrick_lemmer',
  },
  {
    name: 'GitHub',
    icon: GitHub,
    alt: 'Follow me on GitHub',
    link: 'https://github.com/patricklemmer',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    alt: 'Follow me on GitHub',
    link: 'https://instagram.com/patrick_lemmer/',
  },
]
