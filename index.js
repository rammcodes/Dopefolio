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


// Insert user data to home page
// header 
document.getElementById('logo-name').innerText = data.name;
document.getElementById('site_logo').src = data.site_logo;

// Hero section
if (document.getElementById('heading-primary')) {
  document.getElementById('heading-primary').innerText = data.heading;
}

if (document.getElementById('short-summary')) {
  document.getElementById('short-summary').innerText = data.summary;
}

// About Me Section
if (document.getElementById('about-me')) {
  document.getElementById('about-me').innerText = data.about_me.short;
}

if (document.getElementById('about-me-detailed')) {
  document.getElementById('about-me-detailed').innerHTML = data.about_me.detailed;
}

var skills_parent = document.getElementById('skills');

if (skills_parent) {
  data.about_me.skills.forEach(skill => {
    var el = document.createElement('div');
    el.classList.add("skills__skill");
    el.innerText = skill;
    skills_parent.appendChild(el);
  });

}



// Projects Section
if (document.getElementById('projects-subheading')) {
  document.getElementById('projects-subheading').innerText = data.projects_subheading;
}
if (document.getElementById('project-list')) {
  data.projects.forEach(project => {
    var el = `<div class="projects__row">
    <div class="projects__row-img-cont">
      <img
        src="${project.image_src}"
        alt="Software Screenshot"
        class="projects__row-img"
        loading="lazy"
      />
    </div>
    <div class="projects__row-content">
      <h3 class="projects__row-content-title">${project.title}</h3>
      <p class="projects__row-content-desc">
        ${project.summary}
      </p>
      <a
        href="${project.href}"
        class="btn btn--med btn--theme dynamicBgClr"
        target="_blank"
      >Case Study</a
      >
    </div>
  </div>`;
    document.getElementById('project-list').innerHTML += el;
  });
}


// Contact section
if (document.getElementById('contact-subheading')) {
  document.getElementById('contact-subheading').innerText = data.contacts_subheading;
}



// Social Links
['github', 'linkedin', 'twitter', 'instagram', 'youtube'].forEach(name => {
  const elements = document.getElementsByClassName(name);
  for (const element of elements) {
    element.href = data[name];
  }
})

// Footer
document.getElementById('footer-summary').innerText = data.footer_summary;
document.getElementById('footer-fullname').innerText = data.name;

