import React from "react";
import me from "../images/Austin-Booth-thumb-180x180.png";

const About = () => {
  return (
    <section className="me">
      <img src={me} alt="A picture of Austin Booth" />
      <h2>I'm Austin, a software developer</h2>
      <p>
        Originally I studied chemistry and worked in the pharmaceutical and
        health and safety industries. Following this I worked as a science
        teacher for 10 years. However for the last few years of my teaching
        career I felt bored and unfulfilled. I wasn't being challenged or
        learning anything new.
      </p>
      <p>
        Since being young I'd always tinkered with computer programming. I had a
        ZX Spectrum computer and learnt how to do some simple programming.
        However this is as far as my programming went at the time.
      </p>
      <p>
        Much later I had a go at programming a PHP website that would generate
        questions for my classes. This sparked my interest in programming again
        and I loved that I'd made something that was useful.
      </p>
      <p>
        So I decided to pursue programming much more. I'd also learnt a little
        about data science and Python and so decided to learn some basics with
        Dataquest. After learning how to use Python to do some basic data
        analysis and machine learning I was hooked! I always loved solving
        problems, and this was exactly what I was doing with programming.
      </p>
      <p>
        And so I decided that I wanted to change career and be a software
        developer. However changing career in your early 40s isn't easy. I
        decided that the quickest way would be to enrol in a coding bootcamp.
        After researching several, the one that really stood out was
        Northcoders. I decided to apply and successfully completed the tech
        test! This was April 2020.
      </p>
      <p>
        However the Coronavirus pandemic had just started, and all future
        bootcamps were postponed. During this time I completed four backend
        Python projects from the Udacity Full Stack Web Developer nanodegree (I
        completed everything except the final project) when they were giving
        away a free month on any of their courses due to the global lockdown.
        For one of these projects I implemented Auth0 authentication and built
        an AWS CI/CD pipeline.
      </p>
      <p>
        Then Northcoders announced they were going to do a fully remote version
        of their bootcamp. I jumped at the opportunity and started in June and
        finished September 2020.
      </p>
    </section>
  );
};

export default About;
