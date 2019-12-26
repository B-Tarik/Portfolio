import React from 'react';

import { ReactComponent as Simple } from '../svgo/simple.svg';
import { ReactComponent as Responsive } from '../svgo/responsive.svg';
import { ReactComponent as Performance } from '../svgo/performance.svg';
import { ReactComponent as Accessible } from '../svgo/accessible.svg';
import { ReactComponent as Frontend } from '../svgo/frontend.svg';
import { ReactComponent as Backend } from '../svgo/backend.svg';
import { ReactComponent as Workflow } from '../svgo/workflow.svg';
import { ReactComponent as Database } from '../svgo/database.svg';
import { ReactComponent as Testing } from '../svgo/testing.svg';
import { ReactComponent as Design } from '../svgo/design.svg';

const services = [
  {
    icon: <Simple title="Simple icon" />,
    title: "Simple",
    text: "Using intuitive UI/UX that are simple, beautiful and effective."
  },
  {
    icon: <Responsive title="Responsive icon" />,
    title: "Responsive",
    text:
      "Making responsive layout that can fit any viewport from mobile to desktop."
  },
  {
    icon: <Performance title="Performance icon" />,
    title: "Performance",
    text:
      "Striving for best performance, faster load time and smooth user interaction are a must."
  },
  {
    icon: <Accessible title="Accessible icon" />,
    title: "Accessible",
    text:
      "Giving users equal access to information and functionality for your app/website."
  }
];

const skills = [
  {
    icon: <Frontend title="Frontend icon" />,
    title: "Front End",
    tools: ["HTML", "CSS", "Sass", "Javascript", "React"]
  },
  {
    icon: <Backend title="Backend icon" />,
    title: "Back End",
    tools: ["Nodejs", "Express", "REST API"]
  },
  {
    icon: <Workflow title="Workflow icon" />,
    title: "Workflow",
    tools: ["Github", "Webpack", "Gulp"]
  },
  {
    icon: <Database title="Database icon" />,
    title: "Database",
    tools: ["MongoDb", "MySql"]
  },
  {
    icon: <Testing title="Testing icon" />,
    title: "Testing",
    tools: ["Mocha", "Chai"]
  },
  {
    icon: <Design title="Design icon" />,
    title: "Design",
    tools: ["Adobe XD", "Illustrator", "Photoshop"]
  }
];

const projectSkills = {
  design_x_i: {
    title: 'Design',
    tools: ['Adobe XD', 'Illustrator']
  },
  design_x_p: {
    title: 'Design',
    tools: ['Adobe XD', 'Photoshop']
  },
  design_i: {
    title: 'Design',
    tools: ['Illustrator']
  },
  frontEnd_r: {
    title: 'Front End',
    tools: ['HTML', 'CSS', 'Sass', 'Javascript', 'React']
  },
  frontEnd_d: {
    title: 'Front End',
    tools: ['HTML', 'CSS', 'Sass', 'Javascript', 'D3']
  },
  backEnd: {
    title: 'Back End',
    tools: ['NodeJs', 'Express', 'REST API']
  },
  testing: {
    title: 'Testing',
    tools: ['Mocha', 'Chai']
  },
  database: {
    title: 'Database',
    tools: ['MongoDb']
  }
}

const projects = [
  {
    name: "ANONYMOUS MESSAGE BOARD.",
    img: "anon-message",
    codeLink: "https://github.com/B-Tarik/fcc-projects_Anonymous-message-board",
    liveLink: "https://fcc-bt-anon-message-board.glitch.me/app",
    liveSrc: "glitch",
    text:
      "Full-stack project which the user can read and post anonymous messages and replies.",
    skills: [
      projectSkills["frontEnd_r"],
      projectSkills["backEnd"],
      projectSkills["testing"],
      projectSkills["database"]
    ]
  },
  {
    name: "POMODORO TIMER.",
    img: "pomodoro-timer",
    codeLink: "https://github.com/B-Tarik/fcc-projects_Build-a-Pomodoro-Clock",
    liveLink: "https://codepen.io/B-Tarik/full/BEmaVK",
    liveSrc: "codepen",
    text:
      "An animated Pomodoro clock to help the user improve their productivity.",
    skills: [projectSkills["frontEnd_r"]]
  },
  {
    name: "LANDING PAGE.",
    img: "landing-page",
    codeLink:
      "https://github.com/B-Tarik/fcc-projects_Build-Landing-Page-NOICETIMER",
    liveLink: "https://codepen.io/B-Tarik/full/YoKJQm",
    liveSrc: "codepen",
    text:
      "Front-end project which I made a landing page for the Pomodoro Timer.",
    skills: [projectSkills["design_x_i"], projectSkills["frontEnd_r"]]
  },
  {
    name: "STOCK PRICE CHECKER.",
    img: "stock-price-checker",
    codeLink: "https://github.com/B-Tarik/fcc-projects_Stock-price-checker",
    liveLink: "https://fcc-bt-stock-price-checker.glitch.me",
    liveSrc: "glitch",
    text:
      "A project which the user can check the current value of any requested stock in the market.",
    skills: [
      projectSkills["frontEnd_r"],
      projectSkills["backEnd"],
      projectSkills["testing"],
      projectSkills["database"]
    ]
  },
  {
    name: "TRIBUTE.",
    img: "tribute",
    codeLink:
      "https://github.com/B-Tarik/fcc-projects_Build-Tribute-Page-MUHAMMAD-ALI",
    liveLink: "https://codepen.io/B-Tarik/full/oRWLEy",
    liveSrc: "codepen",
    text: "Front-end project which I built a tribute page to MUHAMMAD ALI.",
    skills: [projectSkills["design_x_p"], projectSkills["frontEnd_r"]]
  },
  {
    name: "RANDOM QUOTING MACHINE.",
    img: "random-quotes",
    codeLink:
      "https://github.com/B-Tarik/fcc-projects_Build-a-Random-Quote-Machine",
    liveLink: "https://codepen.io/B-Tarik/full/drbXqO",
    liveSrc: "codepen",
    text:
      "A random quoting app which retrieves pictures and quotes on request.",
    skills: [projectSkills["frontEnd_r"]]
  },
  {
    name: "URL SHORTENER MICROSERVICE.",
    img: "url-shortener",
    codeLink: "https://github.com/B-Tarik/fcc-projects_Url-shortener",
    liveLink: "https://fcc-bt-url-shortener.glitch.me",
    liveSrc: "glitch",
    text:
      "A microservice which takes a raw URL and return a json response containing a shortcut for that URL.",
    skills: [
      projectSkills["frontEnd_r"],
      projectSkills["backEnd"],
      projectSkills["database"]
    ]
  },
  {
    name: "CHOROPLETH MAP.",
    img: "choropleth",
    codeLink:
      "https://github.com/B-Tarik/fcc-projects_Visualize-Data-with-Choropleth-Map",
    liveLink: "https://codepen.io/B-Tarik/full/pYeOWG",
    liveSrc: "codepen",
    text:
      "A choropleth map representing the educational attainment by county in the U.S.",
    skills: [projectSkills["frontEnd_d"]]
  },
  {
    name: "PERSONAL LIBRARY.",
    img: "personal-library",
    codeLink: "https://github.com/B-Tarik/fcc-projects_Personal-library",
    liveLink: "https://fcc-bt-personal-library.glitch.me",
    liveSrc: "glitch",
    text:
      "The user can store book titles and comments to each book in a database.",
    skills: [
      projectSkills["frontEnd_r"],
      projectSkills["backEnd"],
      projectSkills["testing"],
      projectSkills["database"]
    ]
  },
  {
    name: "CALCULATOR.",
    img: "calculator",
    codeLink:
      "https://github.com/B-Tarik/fcc-projects_Build-a-JavaScript-Calculator",
    liveLink: "https://codepen.io/B-Tarik/full/axaRwL",
    liveSrc: "codepen",
    text: "A project which I made a virtual calculator with standar features.",
    skills: [projectSkills["frontEnd_r"]]
  },
  {
    name: "EXERCISE TRACKER.",
    img: "exercise-tracker",
    codeLink: "https://github.com/B-Tarik/fcc-projects_Exercise-tracker",
    liveLink: "https://fcc-bt-exercise-tracker.glitch.me",
    liveSrc: "glitch",
    text:
      "A service which lets the users save their daily exercise  into a database.",
    skills: [
      projectSkills["frontEnd_r"],
      projectSkills["backEnd"],
      projectSkills["database"]
    ]
  },
  {
    name: "SURVEY FORM.",
    img: "survey-form",
    codeLink: "https://github.com/B-Tarik/fcc-projects_Build-a-Survey-Form",
    liveLink: "https://codepen.io/B-Tarik/full/bJPLPg",
    liveSrc: "codepen",
    text: "Front-end project which I built a multi-step survey form.",
    skills: [projectSkills["frontEnd_r"]]
  },
  {
    name: "ISSUE TRACKER.",
    img: "issue-tracker",
    codeLink: "https://github.com/B-Tarik/fcc-projects_Issue-tracker",
    liveLink: "https://fcc-bt-issue-tracker.glitch.me",
    liveSrc: "glitch",
    text:
      "Full-stack project which the user can save and manage technical issues.",
    skills: [
      projectSkills["frontEnd_r"],
      projectSkills["backEnd"],
      projectSkills["testing"],
      projectSkills["database"]
    ]
  },
  {
    name: "DRUM MACHINE.",
    img: "drum-machine",
    codeLink: "https://github.com/B-Tarik/fcc-projects_Build-a-Drum-Machine",
    liveLink: "https://codepen.io/B-Tarik/full/WWZONw/",
    liveSrc: "codepen",
    text: "A drum machine that can be triggered either by mouse or keyboard.",
    skills: [projectSkills["design_i"], projectSkills["frontEnd_r"]]
  },
  {
    name: "METRIC-IMPERIAL CONVERTER.",
    img: "metric-imp-converter",
    codeLink:
      "https://github.com/B-Tarik/fcc-projects_Metric-imperial-converter",
    liveLink: "https://fcc-bt-metric-imp-converter.glitch.me",
    liveSrc: "glitch",
    text:
      "The user can convert values from the Internation System of Units (Metric) into the imperial units.",
    skills: [
      projectSkills["frontEnd_r"],
      projectSkills["backEnd"],
      projectSkills["testing"],
      projectSkills["database"]
    ]
  }
];


export { services, skills, projects};