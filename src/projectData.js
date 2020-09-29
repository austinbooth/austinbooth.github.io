import ncNewsBe from "./images/nc-news-be.png";
import ncNewsFe from "./images/nc-news-fe.png";
const projectData = [
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
    cardBody: "A full-stack group project completed over two weeks; the final project completed from the Northcoders bootcamp.",
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
];

export default projectData;
