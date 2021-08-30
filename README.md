# Dopefolio 🔥

## A Blazing Fast Multipage Portfolio Template for Developers 🚀

## [Demo Link](https://dopefolio.netlify.app) 🔗

<div align="center">
  <img src="https://i.postimg.cc/CxZXqhWM/ezgif-com-video-to-gif-1.gif" alt="Dopefolio Demo" width="100%" />
  <br>
</div>

<br/>
<br/>

## Features

- **Easy to Use** 🥑
- **No Additional Libraries** 🤘
- **No Additional Frameworks** 🙌
- **SEO Friendly** 💎
- **Great Audits Score** 🎖️

<img src="https://i.ibb.co/1dD8Mky/Screenshot-from-2021-08-28-14-38-30.png" alt="Dopefolio Audits" width="100%" />

<br/>
<br/>

## Test the template with different colors on the playground link 🚀

## [Playground Link](https://dopefolio-playground.netlify.app) 🔗

<div align="center">
  <img src="https://i.postimg.cc/xjsqN9GG/ezgif-com-gif-maker-2.gif" alt="Dopefolio Playground" width="100%" />
  <br>
</div>

<br/>
<br/>

## How To Use 🔧

From your command line, first clone Dopefolio:

```bash
# Clone this repository
$ git clone https://github.com/rammahe1110/dopefolio

# Go into the repository
$ cd dopefolio

# Remove current origin repository
$ git remote remove origin
```

<br/>

Then you can install the dependencies

Using NPM:

```bash
# Install dependencies
$ npm install

# Listen to changes in CSS Preprocessor files ( SASS files )
$ npm run compile:scss
```

Once you run `npm run compile:scss`, then you can open the `index.html` inside your favorite browser or using the live server extension.

## Template Instructions:

### Step 1 - STRUCTURE

Go to `/index.html` and fill your information, there are 6 sections:

### Header of Homepage

- On `.header__logo-img`, Add your own Image, Better if the background of image is transparent so the background can match the theme color. To remove the background of your image, you can visit remove.bg where you can upload your image and it will remove the background of it.
- On `.header__logo-sub`, Add your own Name.

```html
<header class="header">
  <div class="header__content">
    <div class="header__logo-container">
      <div class="header__logo-img-cont">
        <img
          src="./assets/png/john-doe.png"
          alt="Ram Maheshwari Logo Image"
          class="header__logo-img"
        />
      </div>
      <span class="header__logo-sub">John Doe</span>
    </div>
    <div class="header__main">
      <ul class="header__links">
        <li class="header__link-wrapper">
          <a href="./" class="header__link"> Home </a>
        </li>
        <li class="header__link-wrapper">
          <a href="./#about" class="header__link">About </a>
        </li>
        <li class="header__link-wrapper">
          <a href="./#projects" class="header__link"> Projects </a>
        </li>
        <li class="header__link-wrapper">
          <a href="./#contact" class="header__link"> Contact </a>
        </li>
      </ul>
      <div class="header__main-ham-menu-cont">
        <img
          src="./assets/svg/ham-menu.svg"
          alt="hamburger menu"
          class="header__main-ham-menu"
        />
      </div>
    </div>
  </div>
  <div class="header__sm-menu">
    <div class="header__sm-menu-content">
      <ul class="header__sm-menu-links">
        <li class="header__sm-menu-link">
          <a href="./"> Home </a>
        </li>

        <li class="header__sm-menu-link">
          <a href="./#about"> About </a>
        </li>

        <li class="header__sm-menu-link">
          <a href="./#projects"> Projects </a>
        </li>

        <li class="header__sm-menu-link">
          <a href="./#contact"> Contact </a>
        </li>
      </ul>
    </div>
  </div>
</header>
```

### Hero Section of Homepage

- On `.heading-primary`, put your custom title.
- On `.text-primary`, put a short description about yourself.
- On `.home-hero__social-icon-link`, fill the href attribute with link related to your social media account.

```html
<!-- **** Hero Section of Homepage **** -->
<section class="home-hero">
  <div class="home-hero__content">
    <h1 class="heading-primary">Hey, My name is John Doe</h1>
    <div class="home-hero__info">
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente solutions for complex
        problems
      </p>
    </div>
    <div class="home-hero__cta">
      <a href="./#projects" class="btn btn--bg">Projects</a>
    </div>
  </div>
  <div class="home-hero__socials">
    <div class="home-hero__social">
      <a href="#" class="home-hero__social-icon-link">
        <img
          src="./assets/png/linkedin-ico.png"
          alt="icon"
          class="home-hero__social-icon"
        />
      </a>
    </div>
    <div class="home-hero__social">
      <a href="#" class="home-hero__social-icon-link">
        <img
          src="./assets/png/github-ico.png"
          alt="icon"
          class="home-hero__social-icon"
        />
      </a>
    </div>
    <div class="home-hero__social">
      <a href="#" class="home-hero__social-icon-link">
        <img
          src="./assets/png/twitter-ico.png"
          alt="icon"
          class="home-hero__social-icon"
        />
      </a>
    </div>
    <div class="home-hero__social">
      <a href="#" class="home-hero__social-icon-link">
        <img
          src="./assets/png/yt-ico.png"
          alt="icon"
          class="home-hero__social-icon"
        />
      </a>
    </div>
    <div class="home-hero__social">
      <a
        href="#"
        class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
      >
        <img
          src="./assets/png/insta-ico.png"
          alt="icon"
          class="home-hero__social-icon"
        />
      </a>
    </div>
  </div>
  <div class="home-hero__mouse-scroll-cont">
    <div class="mouse"></div>
  </div>
</section>
<!-- /END Hero Section -->
```

### About Section

- On `.heading-sec__sub`, put a short description about the section.
- On `.about__content-details-para`, put your details here and use `<strong></strong>` tag to highlight specific keywords.
- On `.skills__skill`, mention your skill one by one.

```html
<!-- **** About Section of Homepage **** -->
<section id="about" class="about sec-pad">
  <div class="main-container">
    <h2 class="heading heading-sec heading-sec__mb-med">
      <span class="heading-sec__main">About Me</span>
      <span class="heading-sec__sub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente
      </span>
    </h2>
    <div class="about__content">
      <div class="about__content-main">
        <h3 class="about__content-title">Get to know me!</h3>
        <div class="about__content-details">
          <p class="about__content-details-para">
            Hey! It's
            <strong>John Doe</strong>
            and I'm a <strong> Frontend Web Developer </strong> located in Los
            Angeles. I've done
            <strong> remote </strong>
            projects for agencies, consulted for startups, and collaborated with
            talented people to create
            <strong>digital products </strong>
            for both business and consumer use.
          </p>
          <p class="about__content-details-para">
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Feel free to
            <strong>contact</strong> me here.
          </p>
        </div>
        <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
          >Contact</a
        >
      </div>
      <div class="about__content-skills">
        <h3 class="about__content-title">My Skills</h3>
        <div class="skills">
          <div class="skills__skill">HTML</div>
          <div class="skills__skill">CSS</div>
          <div class="skills__skill">JavaScript</div>
          <div class="skills__skill">React</div>
          <div class="skills__skill">SASS</div>
          <div class="skills__skill">GIT</div>
          <div class="skills__skill">Shopify</div>
          <div class="skills__skill">Wordpress</div>
          <div class="skills__skill">Google ADS</div>
          <div class="skills__skill">Facebook Ads</div>
          <div class="skills__skill">Android</div>
          <div class="skills__skill">IOS</div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- /END Hero Section -->
```

### Projects

- On `.heading-sec__sub`, put a short description about the section.

```html
<!-- **** Projects Section of Homepage **** -->
<section id="projects" class="projects sec-pad">
  <div class="main-container">
    <h2 class="heading heading-sec heading-sec__mb-bg">
      <span class="heading-sec__main">Projects</span>
      <span class="heading-sec__sub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente
      </span>
    </h2>

    <div class="projects__content">
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img
            src="./assets/jpeg/project-mockup-example.jpeg"
            alt="Software Screenshot"
            class="projects__row-img"
            loading="lazy"
          />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">Project 1</h3>
          <p class="projects__row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-1.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a
          >
        </div>
      </div>
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img
            src="./assets/jpeg/project-mockup-example.jpeg"
            alt="Software Screenshot"
            class="projects__row-img"
            loading="lazy"
          />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">Project 2</h3>
          <p class="projects__row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-2.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a
          >
        </div>
      </div>
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img
            src="./assets/jpeg/project-mockup-example.jpeg"
            alt="Software Screenshot"
            class="projects__row-img"
            loading="lazy"
          />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">Project 3</h3>
          <p class="projects__row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-3.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a
          >
        </div>
      </div>
    </div>
  </div>
</section>
<!-- /END Hero Section -->
```
