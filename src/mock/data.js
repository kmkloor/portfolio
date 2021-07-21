import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kate | Software Development Manager', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Kate',
  subtitle: 'I\'m a full stack developer \n & development manager',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'KatePhoto.jpg',
  paragraphOne: 'I am a Software Development Manager responsible for 12 ecommerce sites. I mainly work in Shopify, React, Rails, SQL and AWS. I started building websites when I was ten, spent a few years as a librarian, and then got my MIT from Virginia Tech. Since then I have worked my way from junior developer to development manager.',
  paragraphTwo: 'I still consider myself both a developer and a manager because I love coding and problem solving as much as I enjoy growing a team and working on the big picture. I think being passionate about all these aspects is necessary to build great things! ',
  paragraphThree: 'Outside of work I enjoy hiking, photography, oil painting, wood working, and my pets - who may join video meetings uninvited. I apologize in advance. ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: [ 'eastpak.png', 'pure.png', 'trophy.png', 'spray.png'],
    title: 'Manage',
    info: 'I develop and manage 12 direct to consumer Shopify sites as well as our company\'s headless Contentful & React homepage.' ,
    info2: 'For the ecommerce sites, this includes integration with our Rails inventory and shipment system and custom React and Rails apps as needed.',
    info3: 'I also manage several talented overseas developers and an awesome QA team.',
    url: '',
    slider: true,
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'abtest.png',
    title: 'Optimize',
    info: 'Problem: We wanted to make changes but we weren\'t sure how they would affect customer behavior',
    info2: 'Solution: I integrated Google Optimize with the site and with Google Analytics. We performed many A/B tests and increased conversion rates.',
    info3: 'Result: We used the data to maximize sales. This also had the unexpected side effect of solving design disagreements ("Let\'s just A/B test it!")',
    url: '',
    slider: false,
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chart.png',
    title: 'Scale',
    info: 'Problem: We outgrew static curation for subscription boxes. We had to change box configuration multiple times a month and then remember not to repeat items. We had leftover inventory we couldn\'t use because we didn\'t know which customers had received it before.',
    info2: 'Solution: I developed dynamic curation. Using customer preferences, past orders, and inventory, we chose items that were available and hadn\'t been received before.',
    info3: 'Result: We were able to support continued growth, reduce waste, and better optimize purchasing.',
    url: '',
    slider: false,
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'lambda.png',
    title: 'Solve',
    info: 'Problem: We frequently run into problems outside the scope of Shopify\'s built in solutions.',
    info2: 'Solution: This is my favorite part of my job. I research and identify technologies or methods that will solve the problem at the appropriate scale. Sometimes it is a quick Serverless AWS app, sometimes it is a full Rails app.',
    info3: 'Result: I am constantly learning new techniques to share with my team and vice-versa.',
    url: '',
    slider: false,
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kmkloor@gmail.com',
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
