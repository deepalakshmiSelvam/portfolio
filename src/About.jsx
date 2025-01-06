import React from "react";
import about_profile from "../public/photos/about_profile.jpg";
import "./about.css";
const About = () => {
  return (
    <div className="about_container" id="about">
      <section className="skills">
        <div className="skill_Title">
          {/* <h6>MY TECH</h6>
          <h4>SKILLS</h4> */}
          <h6>My Technical Skills</h6>
        </div>
        <div className="skill_list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVA</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
        </div>
        <div className="skill_list">
        <li>Agile</li>
          <li>GIT</li>
          <li>TailWindCSS</li>
          <li>SDLC</li>
          <li>RestAPI</li>
        </div>
      </section>
      <section className="photo">
        <img src={about_profile} alt="my_photo" />
        <h5>Me</h5>
      </section>
      <section className="qualifications">
        <h5>My qualifications</h5>
        <h3>MASTER OF ENGINEERING</h3>
        <h4>CSE FROM CHENNAI INSTITUTE OF TECHNOLOGY</h4>
        <h4>CHENNAI | TAMIL NADU</h4>
        <h6>2020-2022</h6>

        <h3>BACHELOR OF TECHNOLOGY</h3>
        <h4>IT FROM PRIYADARSHINI ENGINEERING COLLEGE</h4>
        <h4>VANIYAMBADI | TAMIL NADU</h4>
        <h6>2012-2016</h6>
      </section>
    </div>
  );
};

export default About;
