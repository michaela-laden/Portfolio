import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Michaela Laden • Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Michaela Laden',
  subtitle: 'Web Developer & Data Analyst',
  cta: 'Procede as Anticipated',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "Hello, my name is Michaela. I am nearly a year out of college and trying to figure out where I belong in the vast world of technology. I am currently working as a Data Analyst for a major bank in NY. Although data is fascinating, the work isn't fulfilling. I would love to fine a position as a web developer and create elegantly functional websites for clients. Currently I specialize in Front end but I am slowly dipping my toe into the daunting world of Back end.",
  paragraphTwo:
    'I have only done a handful of web projects, but this year I am determined to get many more projects under my belt that I can show off. This portfolio will show all of my amazing and, inevitably, not so amazing work. Hopefully, over time I will be able to see how much I have progressed. ',
  paragraphThree: 'Check out my Resume below!',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'michaela.laden@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
