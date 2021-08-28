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

// ---
const themeColorSelector = document.querySelector('.themeClrSelector')
const themeColorSelectorInput = document.querySelector(
  '.themeClrSelector__input'
)
const dynamicBgColor = document.querySelectorAll('.dynamicBgClr')
const dynamicBg = document.querySelectorAll('.dynamicBg')
const dynamicBorderColor = document.querySelectorAll('.dynamicBrdrClr')
const commonBgUrl = '../../assets/svg/common-bg.svg'

const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const eventFire = (el, etype) => {
  if (el.fireEvent) {
    el.fireEvent('on' + etype)
  } else {
    let evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
}

themeColorSelector.addEventListener('click', () => {
  eventFire(themeColorSelectorInput, 'input')
})

const setDynamicColor = (color) => {
  dynamicBgColor.forEach((ele) => {
    ele.style.backgroundColor = color
  })

  const { r, g, b } = hexToRgb(`${color}`)
  dynamicBg.forEach((ele) => {
    ele.style.background = `linear-gradient(
      to right,
      rgba(${r},${g}, ${b}, 0.8),
      rgba(${r},${g}, ${b}, 0.8)
    ),
    url(${commonBgUrl})
  `
  })

  dynamicBorderColor.forEach((ele) => {
    ele.style.color = color
    ele.style.borderColor = color
  })

  document.documentElement.style.setProperty(
    '--heading-secondary-after-bg',
    color
  )

  localStorage.setItem('color', color)
}

themeColorSelectorInput.addEventListener('input', (e) => {
  setDynamicColor(e.target.value)
})

if (localStorage.getItem('color')) {
  let userSelectedColor = localStorage.getItem('color')
  themeColorSelectorInput.value = userSelectedColor
  setDynamicColor(userSelectedColor)
}
