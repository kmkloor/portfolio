import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kate | Software Development Manager', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kate',
  subtitle: 'I\'m a full stack developer \n & development manager',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'KatePhoto.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'abtest.png',
    title: 'Optimize',
    info: '',
    info2: '',
    url: '',
    slider: false,
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chart.png',
    title: 'Scale',
    info: '',
    info2: '',
    url: '',
    slider: false,
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: [ 'eastpak.png', 'pure.png', 'trophy.png', 'spray.png'],
    title: 'Manage',
    info: '',
    info2: '',
    url: '',
    slider: true,
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lambda.png',
    title: 'Solve',
    info: '',
    info2: '',
    url: '',
    slider: false,
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kmkloor/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kmkloor',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
