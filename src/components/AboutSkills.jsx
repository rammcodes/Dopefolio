import aboutSkill from "../assets/img/about-skill.gif";

function AboutSkills() {
  return (
    <>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">My Skills</span>
            <span className="heading-sec__sub">
              The number of technologies in which I am very proefficient, all of
              these spices come together to make something very tasty
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-skills">
              <div className="skills">
                <div className="skills__skill">SCSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">HTML5</div>
                <div className="skills__skill">CSS3</div>
                <div className="skills__skill">GIT</div>
                <div className="skills__skill">npm</div>
                <div className="skills__skill">tailwindcss</div>
                <div className="skills__skill">Responsive Design</div>
                <div className="skills__skill">ES6+</div>
                <div className="skills__skill">basic web design</div>
                <div className="skills__skill">canva</div>
              </div>
            </div>
            <div className="about__content-main">
              <img src={aboutSkill} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSkills;
