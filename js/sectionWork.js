import { experienceData } from "./experienceData.js"

const workContainer = document.getElementById('work-group-container');

let dataMarkup = experienceData.map( project => 
    `
    <div class="work-item-container"> 
      <img src="${project.image}" class="image-left-data" alt="...">
      <div class="work-content">
        <h5 class="work-title">${project.title}</h5>
        <p class="work-text">${project.description}</p>
        <ul class="work-tech-list">
          //DO WORK HERE
        </ul>
        <div>
          <a href="${project.github}"><img src="./img/GitHub-Mark-64px.png"></a>
          //DO WORK HERE
        </div>
      </div>
    </div>
    `
  ).join('');

workContainer.innerHTML = dataMarkup;

console.log(experienceData);