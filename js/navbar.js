const navbarItems = document.querySelectorAll('.navbar-item>div');

navbarItems.forEach( item => {
  item.addEventListener('click', scrollToContent);
});

function scrollToContent(evt) {
  evt.preventDefault();
  let sectionId = this.innerText.toLowerCase();
  let scrollToElement = document.getElementById(sectionId);
  scrollToElement.scrollIntoView();
};