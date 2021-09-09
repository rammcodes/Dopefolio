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


if ("serviceWorker" in navigator)
{
  navigator.serviceWorker.register("sw.js").then(registration =>
  {
    console.log("SW Registered!");
    console.log(registration);
  }).catch(err =>
  {
    console.log("SW Registration Failed "+ err)
  })
}