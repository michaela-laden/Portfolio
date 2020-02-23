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
  cta: 'Proceed as Anticipated',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    "Hello, my name is Michaela. I am nearly a year out of college and trying to figure out where I belong in the vast world of technology. I am currently working as a Data Analyst for a major bank in NY. Although data is fascinating, the work isn't fulfilling. I would love to fine a position as a web developer and create elegantly functional websites for clients. Currently I specialize in Front end but I am slowly dipping my toe into the daunting world of Back end.",
  paragraphTwo:
    'I have only done a handful of web projects, but this year I am determined to get many more projects under my belt that I can show off. This portfolio will show all of my amazing and, inevitably, not so amazing work. Hopefully, over time I will be able to see how much I have progressed. ',
  paragraphThree: 'Check out my Resume below!',
  resume: '/static/Resume/Resume_B.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'BNWHY.JPG',
    title: 'BNWHY',
    info: 'This project is still in the works, but it is basically a question and answer forum for my coworkers so we can ask each other questions about the many tools we use on a daily basis. With this project I am starting to get into working with a Django backend, so it has definitely been a learning experience!',
    info2: 'Live version coming soon!',
    url: 'https://michaela-laden.github.io/',
    repo: 'https://github.com/michaela-laden/michaela-laden.github.io', 
  },
  {
    id: uuidv1(),
    img: 'DatingAnalysis.JPG',
    title: 'Dating Analysis',
    info: "This is a website I created in college to show some data that I collected from OkCupid.com. I scraped data from 400 men and created visualizations for all of the data, and then put all of my findings on this website.",
    info2: '',
    url: 'https://michaela-laden.github.io/ladenm.github.io/',
    repo: 'https://github.com/michaela-laden/ladenm.github.io', 
  },
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to send me an email!',
  btn: 'Talk We Shall!',
  email: 'michaela.laden@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michaela-laden/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/michaela-laden',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, 
};
