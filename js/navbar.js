const navbarItems = document.querySelectorAll('.navbar-item>div');
const navbar = document.querySelector('nav');
let prevScrollPos = window.pageYOffset;

console.log(navbar);

navbarItems.forEach( item => {
  item.addEventListener('click', scrollToContent);
});

function scrollToContent(evt) {
  evt.preventDefault();
  let sectionId = this.innerText.toLowerCase();
  let scrollToElement = document.getElementById(sectionId);
  scrollToElement.scrollIntoView();
};

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if(prevScrollPos > currentScrollPos){
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-80px';
  }
  prevScrollPos = currentScrollPos;
}
