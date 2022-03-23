const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const video=document.querySelector('video');

video.style.height="105vh";

let x=false;

toggleButton.addEventListener('click', () => {
  
  navbarLinks.classList.toggle('active')

     video.style.height="110vh";
  
  
  // video.style.height="125vh";
})
