import React from "react";
import { Picture } from "react-responsive-picture";
import LazyLoad from "react-lazy-load";

import { services, skills } from "../assets/data";
import { trimSpaceLowerCase } from "../utils";

function About({ netSpeed }) {
  const lazyOffset = netSpeed === "fast" ? 300 : 500;

  const pictureSrc =
    netSpeed === "fast"
      ? "./assets/images/png/about-me.png 1x, ./assets/images/png/about-me@2x.png 2x, ./assets/images/png/about-me@3x.png 3x"
      : "./assets/images/png/about-me.png";

  const pictureSrcSet =
    netSpeed === "fast"
      ? "./assets/images/webp/about-me.webp 1x, ./assets/images/webp/about-me@2x.webp 2x, ./assets/images/webp/about-me@3x.webp 3x"
      : "./assets/images/webp/about-me.webp";

  const servicesCards = services.map((service, i) => {
    const delay = 300;
    const innerDelay = 250;

    return (
      <div key={i} className="services-card">
        <div
          className="servicesCard-icon"
          data-aos="flip-left"
          data-aos-anchor=".services-card"
          data-aos-delay={i * innerDelay}
        >
          {service.icon}
        </div>
        <div
          className="servicesCard-title"
          data-aos="zoom-in"
          data-aos-anchor=".services-card"
          data-aos-delay={delay + i * innerDelay}
        >
          {service.title}
        </div>
        <div
          className="servicesCard-text"
          data-aos="fade"
          data-aos-anchor=".services-card"
          data-aos-delay={delay * 2 + i * innerDelay}
        >
          {service.text}
        </div>
      </div>
    );
  });

  const skillsCards = skills.map((skill, i) => {
    const delay = 200;
    const innerDelay = 250;

    const tools = skill.tools.map((tool, j) => {
      return (
        <i
          key={j}
          className={"tools-all tools-" + trimSpaceLowerCase(tool)}
          data-aos-anchor=".skills-card"
          data-aos="fade"
          data-aos-delay={delay * 2 + i * innerDelay + j * innerDelay}
        >
          {tool}
        </i>
      );
    });

    return (
      <div key={i} className="skills-card">
        <div
          className={"skillsCard-icon icon-" + trimSpaceLowerCase(skill.title)}
          data-aos-anchor=".skills-card"
          data-aos="flip-left"
          data-aos-delay={i * innerDelay}
        >
          {skill.icon}
        </div>
        <div
          className="skillsCard-title"
          data-aos-anchor=".skills-card"
          data-aos="zoom-in"
          data-aos-delay={delay + i * innerDelay}
        >
          {skill.title}
        </div>
        <div className="skillsCard-tools">{tools}</div>
      </div>
    );
  });

  return (
    <section id="about" className="about">
      <h2 className="about-title" data-aos="fade-right">
        ABOUT
      </h2>
      <div
        className="title-bar about-bar"
        data-aos="fade-right"
        data-aos-anchor=".about-title"
        data-aos-delay="200"
      ></div>

      <div className="about-services">{servicesCards}</div>

      <div className="about-me">
        <div
          className="aboutMe-image"
          data-aos-anchor=".about-me"
          data-aos="flip-up"
        >
          <LazyLoad offset={lazyOffset}>
            <Picture
              sources={[
                {
                  srcSet: pictureSrcSet,
                  type: "image/webp"
                }
              ]}
              src={pictureSrc}
              alt="Tarik Bouchekkif"
            />
          </LazyLoad>
        </div>
        <div
          className="aboutMe-title"
          data-aos-anchor=".about-me"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          Who's this guy?
        </div>
        <div
          className="aboutMe-text"
          data-aos-anchor=".about-me"
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          Hello, my name is Tarik Bouchekkif, I 'am a web developer and designer
          from Morocco (UTC+0), got my master degree in computer science then
          started my learning and freelance adventure on the web, I enjoy
          solving problems and challenging myself (
          <a
            href="https://app.codesignal.com/profile/b-tarik"
            className="link-underline"
            target="_blanc"
            rel="noreferrer"
          >
            Codesignal
          </a>{" "}
          and{" "}
          <a
            href="https://www.hackerrank.com/tarik_bouchekkif"
            className="link-underline"
            target="_blanc"
            rel="noreferrer"
          >
            Hackerrank
          </a>
          ), as well as making beautiful, simple and easy to use UI/UX.
        </div>
      </div>
      <div className="about-skills">{skillsCards}</div>
    </section>
  );
}

export default About;
