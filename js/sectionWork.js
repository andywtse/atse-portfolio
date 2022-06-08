import { experienceData } from "./experienceData.js"

const workContainer = document.getElementById('work-group-container');

let dataMarkup = experienceData.map( project => {
  let markup = `
    <div class="work-item-container"> 
      <img src="${project.image}" class="image-data" alt="...">
      <div class="work-content">
        <div class="title-container">
        <h5 class="work-title">${project.title}</h5>
        <a href="${project.github}"><img class="work-logo" src="./img/github.svg"></a>` +
        parseDeploy(project.deployment) +
        `
        </div>
        <p class="work-text">${project.description}</p>
        <ul class="work-tech-list">` +
          parseTechList(project.technology) +
        `</ul>
      </div>
    </div>
    `

    return markup;
}).join('');

workContainer.innerHTML = dataMarkup;

function parseTechList(arrayStrings) {
  let markup = '';
  arrayStrings.forEach(element => {
    markup += `<li>${element}</li>`;
  });
  return markup;
}

function parseDeploy(string){
  if(string!==`none`){
    return `<a href="${string}"><img class="work-logo" src="./img/window.svg"></a>`;
  }
  return ``;
};