// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
})

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
     var dark=document.getElementById('but').addEventListener('mousedown',darkmode)
function darkmode () {
  
  document.body.style.background = '#0B0B0B';
  document.getElementById('projects').style.color="#1AEB5F";
  // body... 
  document.getElementById('contact').style.color="#1AE929";
   document.getElementById('contact').style.background ="#1C1010";
  document.getElementsByClassName('about__content-skills').style.background="#100F0F";
  document.getElementsByClassName('header').className="bg-dark";
}
