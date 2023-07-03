import HomeHero from "./HomeHero";
import { useState } from "react";
import About from "./About";
import AboutSkills from "./AboutSkills";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  function handleProjectClick(markup) {
    setProjectPage(markup);
  }

  const [projectPage, setProjectPage] = useState(
    <>
      <HomeHero />
      <About />
      <AboutSkills />
      <Projects handleProjectClick={handleProjectClick} />
    </>
  );
  return (
    <>
      {projectPage}
      <Contact />
    </>
  );
}

export default Home;
