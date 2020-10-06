import ncNewsBe from "./images/nc-news-be.png";
import ncNewsFe from "./images/nc-news-fe.png";
import guessCardHeader from "./images/guess-card-header.png";

const projectData = [
  // {
  //   id: "blank",
  //   title: "blank",
  //   language: "Python",
  //   technologiesShort: ["tech"],
  //   technologiesFull: ["tech"],
  //   date: "May 2020",
  //   cardBody: "body",
  //   githubUrl: [
  //     {
  //       url: "url",
  //       desc: null,
  //     },
  //   ],
  //   liveUrl: [{ url: null, desc: null }],
  //   image: ncNewsBe,
  //   altImage: "alt text",
  //   fullBody: null,
  //   otherImages: [],
  //   demoVideo: null
  // },
  {
    id: "guess-the-number-app",
    title: "Guess the Number App",
    language: "JavaScript",
    technologiesShort: ["React Native"],
    // technologiesFull: [""],
    date: "October 2020",
    cardBody: "A simple 'guess the number' game to learn the fundamentals about React Native.",
    githubUrl: [
      {
        url: "https://github.com/austinbooth/rn-guess-the-number",
        desc: null,
      },
    ],
    liveUrl: [{ url: null, desc: null }],
    image: guessCardHeader,
    altImage: "alt text",
    fullBody: null,
    // otherImages: [{ img: guessLost, alt: "alt text" }, { img: guessWon, alt: "alt text" }],
    demoVideo: { video: "https://www.youtube.com/embed/ZJiCeUKk-tc?rel=0", width: 300, height: 500}
  },
  {
    id: "travel-buddy",
    title: "Travel Buddy",
    language: "JavaScript",
    technologiesShort: ["NodeJS", "GraphQL", "React"],
    technologiesFull: [
      "NodeJS",
      "Express",
      "GraphQL",
      "React",
      "React Leaflet (map element)",
      "Axios",
    ],
    date: "September 2020",
    cardBody:
      "A full-stack group project completed over two weeks; the final project completed as part of the Northcoders bootcamp.",
    githubUrl: [
      {
        url: "https://github.com/austinbooth/travelbuddy-backend",
        desc: "Code for the backend GraphQL API",
      },
      {
        url: "https://github.com/Rosa-lyn/travelbuddy-frontend",
        desc: "Code for the frontend React app",
      },
    ],
    liveUrl: [{ url: null, desc: null }],
    image: ncNewsBe,
    altImage: "alt text",
  },
  {
    id: "nc-news",
    title: "NC News",
    language: "JavaScript",
    technologiesShort: ["React"],
    technologiesFull: ["React", "Axios"],
    date: "August 2020",
    cardBody:
      "A Reddit-style news app which uses my NC News API as the backend.",
    githubUrl: [
      {
        url: "https://github.com/austinbooth/nc-news-backend",
        desc: null,
      },
    ],
    liveUrl: [{ url: "https://nc-news-ab.netlify.app/", desc: "" }],
    image: ncNewsFe,
    altImage: "alt text",
  },
  {
    id: "nc-news-api",
    title: "NC News API",
    language: "JavaScript",
    technologiesShort: ["NodeJS", "Jest (TDD)"],
    technologiesFull: ["NodeJS", "Express", "Knex", "Postgres", "Jest (TDD)"],
    date: "July 2020",
    cardBody:
      "A RESTful API serving as the backend for a Reddit-style news app.",
    githubUrl: [
      {
        url: "https://github.com/austinbooth/nc-news-backend",
        desc: null,
      },
    ],
    liveUrl: [{ url: "https://nc-news-ab.herokuapp.com/api/", desc: "" }],
    image: ncNewsBe,
    altImage: "alt text",
    fullBody:
      "A RESTful API serving as the backend for a Reddit-style news app. Built using TDD with Jest.",
  },
  {
    id: "fsnd-deploying-a-simple-flask-api-to-aws",
    title: "Deploying a Flask API to AWS (Udacity project)",
    language: "Python",
    technologiesShort: ["Kubernetes", "AWS", "CI/CD"],
    technologiesFull: [
      "Gunicorn",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "CI/CD",
      "CodePipeline",
      "CodeBuild",
      "Flask",
    ],
    date: "May 2020",
    cardBody:
      "Deployment of a simple Flask API to a Kubernetes cluster using Docker, AWS EKS, CodePipeline and CodeBuild.",
    githubUrl: [
      {
        url:
          "https://github.com/austinbooth/FSND-Deploy-Flask-App-to-Kubernetes-Using-EKS",
        desc: null,
      },
    ],
    liveUrl: [{ url: null, desc: null }],
    image: ncNewsBe,
    altImage: "alt text",
  },
  {
    id: "fsnd-coffee-shop",
    title: "Coffee Shop (Udacity project)",
    language: "Python",
    technologiesShort: ["Flask", "Auth0"],
    // technologiesFull: [""],
    date: "May 2020",
    cardBody:
      "I completed an already existing codebase by implementing Auth0 JWT authentication for a ficticious coffee shop website.",
    githubUrl: [
      {
        url:
          "https://github.com/austinbooth/FSND-project-3-coffee-shop/tree/master/backend",
        desc: null,
      },
    ],
    liveUrl: [{ url: null, desc: null }],
    image: ncNewsBe,
    altImage: "alt text",
  },
  {
    id: "fsnd-trivia-app",
    title: "Trivia app (Udacity project)",
    language: "Python",
    technologiesShort: ["Flask", "SQLAlchemy", "PostgreSQL"],
    // technologiesFull: [""],
    date: "May 2020",
    cardBody:
      "I completed an already exisiting codebase by adding several API endpoints to enable CRUD operations on quiz questions stored in the PostgreSQL database.",
    githubUrl: [
      {
        url:
          "https://github.com/austinbooth/FSND-project-2-Trivia-app/tree/master/backend",
        desc: null,
      },
    ],
    liveUrl: [{ url: null, desc: null }],
    image: ncNewsBe,
    altImage: "alt text",
  },
  {
    id: "fsnd-fyyur",
    title: "Fyyur (Udacity project)",
    language: "Python",
    technologiesShort: ["Flask", "SQLAlchemy", "PostgreSQL"],
    // technologiesFull: [""],
    date: "May 2020",
    cardBody: "I completed an already exisiting codebase by adding models to allow the app to interact with a PostgreSQL database.",
    githubUrl: [
      {
        url: "https://github.com/austinbooth/FSND-project-1-Fyyur",
        desc: null,
      },
    ],
    liveUrl: [{ url: null, desc: null }],
    image: ncNewsBe,
    altImage: "alt text",
  },
];

export default projectData;
