import React, { useRef } from "react";
import { Picture } from "react-responsive-picture";
import LazyLoad from "react-lazy-load";

import { projects } from '../assets/data';
import { trimSpaceLowerCase } from '../utils';

function MyWork({ isMobile, isGrid, netSpeed }) {

  const myworkRef = useRef();
  const offset = isGrid ? "450" : "250";
  const lazyOffset = netSpeed === "fast" ? 300 : 500;

  const projectsCards = projects.map((project, i) => {
    const delay = 300;
    const innerDelay = 150;
    const gridDelay = isGrid ? (i % 3) * 300 : 0;

    const pictureSrc =
      netSpeed === "fast"
        ? `./assets/images/png/${project.img}.png 1x, ./assets/images/png/${project.img}@2x.png 2x, ./assets/images/png/${project.img}@3x.png 3x`
        : `./assets/images/png/${project.img}.png`;

    const pictureSrcSet =
      netSpeed === "fast"
        ? `./assets/images/webp/${project.img}.webp 1x, ./assets/images/webp/${project.img}@2x.webp 2x, ./assets/images/webp/${project.img}@3x.webp 3x`
        : `./assets/images/webp/${project.img}.webp`;

    const skills = project.skills.map((skill, j) => {
      const tools = skill.tools.map((tool, k) => {
        return (
          <i
            key={k}
            className={"tools-all tools-" + trimSpaceLowerCase(tool)}
            data-aos="fade"
            data-aos-anchor={".projects-card--" + i}
            data-aos-delay={
              delay * 3 + j * innerDelay + k * innerDelay + gridDelay
            }
            data-aos-offset={offset}
          >
            <div className="tooltiptext-container tooltip-top">
              <span className="tooltiptext">{tool}</span>
            </div>
          </i>
        );
      });

      return (
        <div
          key={j}
          className={
            "tools-categories tools-" + trimSpaceLowerCase(skill.title)
          }
        >
          <div
            className="categories-title"
            data-aos="fade"
            data-aos-anchor={".projects-card--" + i}
            data-aos-delay={delay * 3 + j * innerDelay + gridDelay}
            data-aos-offset={offset}
          >
            {skill.title}:
          </div>
          {tools}
        </div>
      );
    });

    return (
      <div
        key={i}
        className={"projects-card projects-card--" + i}
        data-aos="zoom-in"
      >
        <div className="projectsCard-container">
          <LazyLoad offset={lazyOffset}>
            <Picture
              sources={[
                {
                  srcSet: pictureSrcSet,
                  type: "image/webp"
                }
              ]}
              src={pictureSrc}
              alt={project.img}
              className={isMobile ? "projectsCard-image projectsCard-image--mobile" : "projectsCard-image"}
              data-aos={isMobile ? "none" : "fade"}
              data-aos-anchor={".projects-card--" + i}
              style={ isMobile 
                ? {
                }
                : {
                  transitionDelay: `${delay + gridDelay}ms, 0ms, 0ms`
                }
              }
            />
          </LazyLoad>

          {isGrid && (
            <div className="projectsCard-image--hover">
              <div className="projectsCard-btns--desktop">
                <a
                  className="projectsCard-btn"
                  href={project.codeLink}
                  onFocus={e => {
                    e.target.classList.add("revealBtn");
                    e.target.parentNode.parentNode.classList.add("reveal");
                  }}
                  onBlur={e => {
                    e.target.classList.remove("revealBtn");
                    e.target.parentNode.parentNode.classList.remove("reveal");
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code <span className="btn-github">Github</span>
                </a>
                <a
                  className="projectsCard-btn"
                  href={project.liveLink}
                  onFocus={e => {
                    e.target.classList.add("revealBtn");
                    e.target.parentNode.parentNode.classList.add("reveal");
                  }}
                  onBlur={e => {
                    e.target.classList.remove("revealBtn");
                    e.target.parentNode.parentNode.classList.remove("reveal");
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it Live
                  {project.liveSrc === "codepen" ? (
                    <span className="btn-codepen">Codepen</span>
                  ) : (
                    <span className="btn-glitch">Glitch</span>
                  )}
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="projectCard-infos">
          <div
            className="projectsCard-title"
            data-aos="fade-right"
            data-aos-anchor={".projects-card--" + i}
            data-aos-delay={delay + gridDelay}
            data-aos-offset={offset}
          >
            {project.name}
          </div>

          <div
            className="projectsCard-text"
            data-aos="fade"
            data-aos-anchor={".projects-card--" + i}
            data-aos-delay={delay * 2 + gridDelay}
            data-aos-offset={offset}
          >
            {project.text}
          </div>

          <div className="projectsCard-tools">{skills}</div>

          {!isGrid && (
            <div className="projectsCard-btns--mobile">
              <a
                className="projectsCard-btn"
                href={project.codeLink}
                data-aos="fade"
                data-aos-anchor={".projects-card--" + i}
                data-aos-delay={delay * 4 + gridDelay}
                style={{
                  transitionDelay: `1.2s, 1.2s, 0s`,
                  transitionDuration: ".4s, .4s, .3s"
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code <span className="btn-github">Github</span>
              </a>
              <a
                className="projectsCard-btn"
                href={project.liveLink}
                data-aos="fade"
                data-aos-anchor={".projects-card--" + i}
                data-aos-delay={delay * 5 + gridDelay}
                style={{
                  transitionDelay: `1.5s, 1.5s, 0s`,
                  transitionDuration: ".4s, .4s, .3s"
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try it Live
                {project.liveSrc === "codepen" ? (
                  <span className="btn-codepen">Codepen</span>
                ) : (
                  <span className="btn-glitch">Glitch</span>
                )}
              </a>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <section ref={myworkRef} id="mywork" className="mywork">
      <h2 className="mywork-title" data-aos="fade-right">
        MY WORK
      </h2>
      <div
        className="title-bar mywork-bar"
        data-aos="fade-right"
        data-aos-anchor=".mywork-title"
        data-aos-delay="200"
      ></div>
      <div className="mywork-intro" data-aos="fade">
        Here's a list of some projects that i built during my coding camp
        journey on{" "}
        <a
          href="https://www.freecodecamp.org/b-tarik"
          className="link-underline"
          target="_blanc"
          rel="noopener noreferrer"
        >
          FreeCodeCamp
        </a>
        , where I've been coding for almost 8 months until I completed all the
        projects required to get my{" "}
        <a
          href="https://www.freecodecamp.org/certification/b-tarik/full-stack"
          className="link-underline"
          target="_blanc"
          rel="noopener noreferrer"
        >
          Full-Stack Developer Certification
        </a>
        .
      </div>
      <div className="mywork-projects">{projectsCards}</div>
    </section>
  );
}

export default MyWork;