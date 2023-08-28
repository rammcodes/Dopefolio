// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})


// show up active navigation
const nav = Array.from(document.getElementById("navigation").children)
const sections =[eleById("home"),eleById("about"),eleById("projects"),eleById("contact")]

window.onscroll =()=>{
  removeActive()
  addActive()
}
//return element 
function eleById(id){
  return document.getElementById(id)
}

function removeActive(){
  nav.forEach(navEle=>{
    navEle.children[0].classList.remove("active-nav")
  })
}

function addActive(){
    if(window.scrollY >= 0 && window.scrollY <= sections[1].offsetTop-50){
      nav[0].children[0].classList.add("active-nav")
    }
    else if(window.scrollY >= sections[1].offsetTop-50 && window.scrollY <= sections[2].offsetTop-50){
      nav[1].children[0].classList.add("active-nav")
    }
    else if(window.scrollY >= sections[2].offsetTop-50 && window.scrollY <= sections[3].offsetTop-50){
      nav[2].children[0].classList.add("active-nav")
    }
    else if(window.scrollY >= sections[3].offsetTop-50){
      nav[3].children[0].classList.add("active-nav")
    }
}

