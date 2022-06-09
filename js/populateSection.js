import { experienceData, pageDescription, linkInfo } from "./dataDescription.js"

const workContainer = document.getElementById('work-group-container');
const bioContainer = document.querySelector('.bio-info');
const contactContainer = document.querySelector('.contact-info')

const btnDownload = document.getElementById('download-resume');

btnDownload.addEventListener('click', downloadResume);


let workData = experienceData.map( project => {
  let markup = `
    <div class="work-item-container"> 
      <img src="${project.image}" class="image-data" alt="...">
      <div class="work-content">
        <div class="title-container">
        <p class="work-title">${project.title}</p>
        <a href="${project.github}" target="_blank"><img class="work-logo" src="./img/github.svg" alt="${project.title}"></a>` +
        parseDeploy(project.deployment) +
        `
        </div>
        <p class="work-text">${project.description}</p>
        <ul class="work-tech-list">` +
          parseTechList(project.technology) +
        `</ul>
      </div>
    </div>
    <hr noshade>
    `

    return markup;
}).join('');

let linkData = linkInfo.map( link => {
  let markup = `
    <a href="${link.url}" target="${link.target}"><img class="contact-logo" src="${link.image}" alt="${link.name}"></a>
  `
  return markup;
}).join('');

workContainer.innerHTML = workData;
bioContainer.innerHTML = pageDescription[0].description;
contactContainer.innerHTML = pageDescription[1].description;

const linkContainer = document.querySelector('.contact-links');
linkContainer.innerHTML = linkData;


function parseTechList(arrayStrings) {
  let markup = '';
  arrayStrings.forEach(element => {
    markup += `<li>${element}</li>`;
  });
  return markup;
}

function parseDeploy(string){
  if(string!==`none`){
    return `<a href="${string}" target="_blank"><img class="work-logo" src="./img/window.svg"></a>`;
  }
  return ``;
};

function downloadResume(){
  window.open('https://drive.google.com/file/d/1cuY4aDGW8gjmPpUGLcATzf0m3i_-Hz_N/view?usp=sharing');
}