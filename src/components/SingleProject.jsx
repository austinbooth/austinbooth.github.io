import React from "react";
import projectData from "../projectData";

const SingleProject = (props) => {
  const [singleProjectData] = projectData.filter(
    (project) => project.id === props.projectName
  );
  console.log(singleProjectData);
  const {
    id,
    title,
    language,
    technologiesFull,
    date,
    cardBody,
    githubUrl,
    liveUrl,
    image,
    altImage,
    fullBody,
  } = singleProjectData;
  return (
    <div className="full-project">
      <h1>{title}</h1>
      <img src={image} alt={altImage}></img>
      <p className="body">{fullBody ? fullBody : cardBody}</p>
      <section className="project-info">
        <section>
          <h2>Technologies used:</h2>
          <ul>
            {technologiesFull.map((technology) => (
              <li>{technology}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Links:</h2>
          <ul>
            {githubUrl.map((link) => {
              return (
                <li>
                  <a href={link.url} target="_blank">
                    {link.desc ? link.desc : "Code on GitHub"}
                  </a>
                </li>
              );
            })}
            {liveUrl.map((link) => {
              return (
                link.url && (
                  <li>
                    <a href={link.url} target="_blank">
                      {link.desc ? link.desc : "View the live version here"}
                    </a>
                  </li>
                )
              );
            })}
            {/* <li>
              <a href={liveUrl} target="_blank">
                View the live version here
              </a>
            </li> */}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default SingleProject;
