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
    technologiesShort,
    technologiesFull,
    date,
    cardBody,
    githubUrl,
    liveUrl,
    image,
    altImage,
    fullBody,
    otherImages,
    demoVideo,
  } = singleProjectData;
  const technologies = technologiesFull ? technologiesFull : technologiesShort;
  return (
    <div className="full-project">
      <h1>{title}</h1>
      <img src={image} alt={altImage}></img>
      <p className="body">{fullBody ? fullBody : cardBody}</p>
      <section className="project-info">
        <section>
          <h2>Technologies used:</h2>
          <ul>
            {technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Links:</h2>
          <ul>
            {githubUrl.map((link) => {
              return (
                <li key={link}>
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
          </ul>
        </section>
      </section>
      <section className="extraMedia">
        {otherImages &&
          otherImages.map((image) => (
            <img src={image.img} alt={image.alt}></img>
          ))}
        {demoVideo && (
          <div>
            <h3>Demo video</h3>
            <iframe
              title={demoVideo.title}
              width={demoVideo.width}
              height={demoVideo.height}
              src={demoVideo.video}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </section>
    </div>
  );
};

export default SingleProject;
