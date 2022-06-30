let experienceData = [
  {
    title: "DataMETL",
    deployment: "none",
    image: "../img/DataMETL.png",
    demo: "Path Location",
    github: "https://github.com/andywtse/COMP4970",
    description: "DataMETL is a Data Management ETL System intended to perform ETL operations on structured data sets like XML, CSV, and JSON. It loads these structured data sets into various data storage systems such as MySQL, PostgreSQL, Solr, Elastic Search, etc.",
    technology: ["Java", "MySQL"]
  },
  {
    title: "SuperMAM",
    deployment: "none",
    image: "../img/SuperMAM.png",
    demo: "Path Location",
    github: "https://github.com/andywtse/COMP5501",
    description: "SuperMAM is a super computing environment built from a cluster of Raspberry Pis. This repository contains code and setup scripts for the cluster.",
    technology: ["C", "Fortran", "OpenMPI"]
  },
  {
    title: "Person Portfolio",
    deployment: "https://andywtse.netlify.app/",
    image: "../img/Portfolio.png",
    demo: "Path Location",
    github: "https://github.com/andywtse/atse-portfolio",
    description: "My personal portfolio is website deployed and hosted using Netlify. Developed with Javascript, HTML & CSS.",
    technology: ["Javascript", "HTML & CSS"]
  },
  {
    title: "Tic-Tac-Toe",
    deployment: "https://ttt-atse.netlify.app/",
    image: "../img/TicTacToe.png",
    demo: "Path Location",
    github: "https://github.com/andywtse/ttt-weekend",
    description: "A recreation of Tic-Tac-Toe with a bit of flair.",
    technology: ["Javascript", "HTML & CSS"]
  },
  {
    title: "PokeGoose",
    deployment: "https://pokegoose.herokuapp.com/",
    image: "../img/pokegoose.png",
    demo: "Path Location",
    github: "https://github.com/andywtse/PokeGoose",
    description: "PokeGoose is a web application for users to build their best and favorite Pokemon team composition.",
    technology: ["Javascript", "Mongoose", "MongoDB", "Express", 'NodeJS']
  }
];

let pageDescription = [
  {
    //About
    location: ".bio-info",
    description: `
    <h3>Hello there, my name is <span class="first-name">Andy Tse</span></h3>
    <p>I am currently a student taking Software Engineering Immersive at General Assembly.
    </p>
    <p>Below are a few technologies I've worked with recently:</p>
    <ul>
      <li>Java</li>
      <li>C++</li>
      <li>Javascript</li>
      <li>HTML & CSS</li>
    </ul>`
  },
  {
    //Contact
    location: ".contact-info",
    description: `
      <p class="contact-desc">
      Need to get in touch? <br> Here are multiple methods to contact me!</p>
      <div class="contact-links">
      </div>
    `
  }
];

let linkInfo = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/andywtse/",
    image: "./img/linkedin.svg",
    target: "_blank"
  },
  {
    name: "github",
    url: "https://github.com/andywtse",
    image: "./img/github.svg",
    target: "_blank"
  },
  {
    name: "email",
    url: "mailto:atse4995@gmail.com",
    image: "./img/email.svg",
    target: "_blank"
  }

]

export {
  experienceData, pageDescription, linkInfo
}