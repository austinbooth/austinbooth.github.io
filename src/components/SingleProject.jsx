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
            {technologies.map((technology) => (
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
            <video
              autoPlay
              muted
              loop
              width={demoVideo.width}
              height={demoVideo.height}
            >
              <source src={demoVideo.video} type="video/mp4"></source>
            </video>
          </div>
        )}
      </section>
    </div>
  );
};

export default SingleProject;
