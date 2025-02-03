import React from "react";
import "./StartupProjects.css";
import {
  bigProjects, bigProjectsTwo, bigProjectsThree, bigProjectsFour, bigProjectsFive
} from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjects.projects.map(project => {
                return (
                  <div className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                    <img alt="Sajid Nawaz Working" src={project.image} width="230" height="230"></img>
                    <div className="project-name-div"><p>{project.name}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjectsTwo.projects.map(project => {
                return (
                  <div className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                    <img alt="Sajid Nawaz Working" src={project.image} width="230" height="230"></img>
                    <div className="project-name-div"><p>{project.name}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjectsThree.projects.map(project => {
                return (
                  <div className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                    <img alt="Sajid Nawaz Working" src={project.image} width="230" height="230"></img>
                    <div className="project-name-div"><p>{project.name}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjectsFour.projects.map(project => {
                return (
                  <div className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                    <img alt="Sajid Nawaz Working" src={project.image} width="230" height="230"></img>
                    <div className="project-name-div"><p>{project.name}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjectsFive.projects.map(project => {
                return (
                  <div className="saaya-health-div" onClick={() => openProjectInNewWindow(project.link)}>
                    <img alt="Sajid Nawaz Working" src={project.image} width="230" height="230"></img>
                    <div className="project-name-div"><p>{project.name}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
