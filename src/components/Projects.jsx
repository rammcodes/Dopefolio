import project1 from "../assets/img/project-1.jpg";
import project2 from "../assets/img/project-2.jpg";
import project3 from "../assets/img/project-3.jpg";
import ProjectPage from "./ProjectPage";
import PropTypes from "prop-types";

const projectData = [
  {
    projectNum: 1,
    projectTitleDescription:
      "Discover the art of web development through my recipe website. With a sleek interface, bookmarking functionality, and recipe submission feature, it exemplifies my expertise in front-end technologies.",
    appLink: "https://foodify-recipes.netlify.app/",
    imageUrl: "../assets/img/projet-1.jpg",
    projectOverviewDescription: `Welcome to my recipe website, a testament to my prowess as a web developer. Through thoughtful design and seamless user experience, this platform offers a delightful journey into the world of culinary delights. Explore a diverse range of recipes and effortlessly search for your favorite dishes. The intuitive bookmark feature allows users to save their preferred recipes for future reference. As an added bonus, I've implemented a recipe submission feature, enabling visitors to contribute their own creations and become part of the vibrant culinary community.

Embrace the harmonious blend of design and functionality, reflecting my dedication to crafting captivating web experiences.`,
    toolsArray: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "SASS",
      "GIT",
      "Shopify",
      "Wordpress",
      "Google ADS",
      "Facebook Ads",
      "Android",
      "IOS",
    ],
    codeLink: "https://github.com/sauravmeghwal/100-000-Recipies",
  },
  {
    projectNum: 2,
    projectTitleDescription:
      "Discover FitTrack, my dynamic fitness companion that leverages Leaflet.js and geolocation to help you plan and track your workouts.",
    appLink: "https://saurav-mapty.netlify.app/",
    imageUrl: "../assets/img/projet-2.jpg",
    projectOverviewDescription: `Introducing FitTrack: Your Ultimate Fitness Companion As a frontend developer, I'm excited to showcase FitTrack, a web application I created using HTML, CSS, and JavaScript, with the integration of the Leaflet.js library. FitTrack is designed to revolutionize your workout experience. Utilizing geolocation and an interactive map, FitTrack empowers users to mark their desired workout locations with ease. The app then automatically calculates the distance between their current location and the marked point, providing valuable insights for fitness planning.

One of FitTrack's standout features is its ability to create straight paths from the user's current location to the marked workout point. This simplifies navigation, allowing users to focus solely on their fitness journey. Immerse yourself in FitTrack's intuitive interface, where you can effortlessly plan, track, and visualize your workouts. Experience the synergy of design and functionality as FitTrack takes your fitness endeavors to new heights.`,
    toolsArray: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "SASS",
      "GIT",
      "Shopify",
      "Wordpress",
      "Google ADS",
      "Facebook Ads",
      "Android",
      "IOS",
    ],
    codeLink: "https://github.com/sauravmeghwal/workoutonmap",
  },
  {
    projectNum: 3,
    projectTitleDescription:
      "A Brand new marketing website for the E-Bank, it is a very dynamic with soft animations for the leaving a great impression, achieved by the javascript",
    appLink: "https://saurvmeghwal.github.io/marketing_site_with_dom/",
    imageUrl: "../assets/img/projet-3.jpg",
    projectOverviewDescription: `The brand new marketing website for E-Bank is designed to be highly dynamic and captivating, leaving a lasting impression on visitors. Through the clever use of JavaScript, HTML, and CSS, the website features soft animations that enhance the overall user experience. These animations add an element of visual appeal, making the website more engaging and memorable. Whether it's subtle transitions, smooth scrolling effects, or interactive elements, the website leverages these techniques to create a sense of fluidity and modernity.

By incorporating these dynamic elements, E-Bank's marketing website aims to captivate users and deliver a visually striking online presence that sets it apart from the competition.`,
    toolsArray: [
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "SASS",
      "GIT",
      "Shopify",
      "Wordpress",
      "Google ADS",
      "Facebook Ads",
      "Android",
      "IOS",
    ],
    codeLink: "https://github.com/sauravmeghwal/marketing_site_with_dom",
  },
];

Projects.propTypes = {
  handleProjectClick: PropTypes.func,
};

function Projects({ handleProjectClick }) {
  function handleProject(projNum) {
    handleProjectClick(<ProjectPage {...projectData[projNum]} />);
  }

  return (
    <>
      <section id="projects" className="projects sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-bg">
            <span className="heading-sec__main">Projects</span>
            <span className="heading-sec__sub">
              Explore a collection of my meticulously crafted web projects,
              showcasing my proficiency in modern front-end technologies.
            </span>
          </h2>
          <div className="projects__content">
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={project1}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Project 1</h3>
                <p className="projects__row-content-desc">
                  Discover the art of web development through my recipe website.
                  With a sleek interface, bookmarking functionality, and recipe
                  submission feature, it exemplifies my expertise in front-end
                  technologies.
                </p>
                <a
                  onClick={() => handleProject(0)}
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={project2}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Project 2</h3>
                <p className="projects__row-content-desc">
                  Discover FitTrack, my dynamic fitness companion that leverages
                  Leaflet.js and geolocation to help you plan and track your
                  workouts.
                </p>
                <a
                  onClick={() => handleProject(1)}
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={project3}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">Project 3</h3>
                <p className="projects__row-content-desc">
                  A Brand new marketing website for the E-Bank, it is a very
                  dynamic with soft animations for the leaving a great
                  impression, achieved by the javascript
                </p>
                <a
                  onClick={() => handleProject(2)}
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
