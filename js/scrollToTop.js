const buttonReveal = 100;
const buttonScrollTop = document.querySelector('#button-scroll-top');

console.log(buttonScrollTop);

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const scrollToTop = () => {
  document.body.scrollIntoView();
}

buttonScrollTop.addEventListener('click',scrollToTop);

document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > buttonReveal) { 
    buttonScrollTop.style.display = 'block';
  } else {
    buttonScrollTop.style.display = 'none';
  }
});