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
    "Hello, my name is Michaela. I am nearly a year out of college and trying to figure out where I belong in the vast world of technology. I am currently working as a Data Analyst at Bank of New York Mellon, however, I would love to find a position as a web developer. Currently I specialize in front end but I am slowly dipping my toe into the daunting world of back end.",
  paragraphTwo:
    'I have only done a handful of web projects, but this year I am determined to get many more projects under my belt that I can show off. This portfolio will show all of my progress through projects. Right now I am participating in the #100DaysofCode Challenge where I have committed to coding everyday for 100 days and posting my daily work on Twitter. Feel free to follow along throught the Twitter link in the footer of this website! ',
  paragraphThree: 'Check out my Resume below!',
  resume: '/static/Resume/Resume_B.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'BNWHY.JPG',
    title: 'BNWHY',
    info: 'This project is a question and answer forum that was built for my team at BNY Mellon. We use a variety of software, languages, and tools on a daily basis so I thought it would be beneficial to have a hub for questions where anyone on the team could answer and new hires could use as a reference. This site is built using HTML5, CSS3, Bootstrap, and Django Backend. Its capabilities include user registation, creating a profile, user login and logout, creating/updating/deleting a question, and creating a comment.',
    info2: 'Live version coming soon!',
    url: 'https://github.com/michaela-laden/BNWHY-Project',
    repo: 'https://github.com/michaela-laden/BNWHY-Project', 
  },
    {
    id: uuidv1(),
    img: 'glossier_twitte.png',
    title: 'Glossier Bottle',
    info: 'This is a replication of a perfume bottle that I own using only CSS. Mostly just for fun to play around with CSS shapes and gradients.',
    info2: '',
    url: 'https://michaela-laden.github.io/GlossierBottle/',
    repo: 'https://github.com/michaela-laden/GlossierBottle', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'DatingAnalysis.JPG',
    title: 'Dating Analysis',
    info: "This is a website I created in college to show some data that I collected from OkCupid.com. I scraped data from 400 men and created visualizations for all of the data, and then put all of my findings on this website.",
    info2: "This website isn't responsive, so it will most likely look terrible on anything but a 13 in laptop... But the project overall was really interesting and fun!",
    url: 'https://michaela-laden.github.io/ladenm.github.io/',
    repo: 'https://github.com/michaela-laden/ladenm.github.io', 
  },

];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to send me an email!',
  btn: "Let's talk!",
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
      {id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/michaela_laden',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, 
};
