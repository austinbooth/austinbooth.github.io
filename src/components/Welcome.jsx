import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "../projectData";
import { Link } from "@reach/router";

const Welcome = () => {
  return (
    <>
      {/* <section className="me"> */}
      {/* <img src={me} alt="A picture of Austin Booth" /> */}
      {/* <div> */}
      <h1>Hi, I'm Austin</h1>
      <p>
        I'm a Full-stack software developer. I'm passionate about coding, data
        science, travel and music. Before learning to code seriously I was a
        science teacher. Why did I change career?{" "}
        <Link to={process.env.PUBLIC_URL + "/about"}>
          You can find out more here...
        </Link>{" "}
        and{" "}
        <a
          href="https://dev.to/austinbooth/my-journey-from-teaching-to-software-development-1ppc"
          target="_blank"
        >
          here
        </a>
      </p>
      {/* </div> */}
      {/* </section> */}

      <section className="tech">
        <h2>Tech skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> JavaScript, Python, SQL
          </li>
          <li>
            <strong>Back end:</strong> NodeJS, Express, Knex (JS) Flask, Django
            (Python)
          </li>
          <li>
            <strong>Front end:</strong> HTML5, CSS3, React
          </li>
          <li>
            <strong>TDD:</strong> Jest, Supertest (JS) Pytest (Python)
          </li>
          <li>
            <strong>Other:</strong> Git, CLI, agile practices
          </li>

          <li></li>
        </ul>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          {projectData.map((project) => (
            <ProjectCard project={project} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Welcome;
