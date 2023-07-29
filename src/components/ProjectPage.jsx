import PropTypes from "prop-types";

ProjectPage.propTypes = {
  projectNum: PropTypes.number.isRequired,
  projectTitleDescription: PropTypes.string,
  appLink: PropTypes.string,
  imageUrl: PropTypes.string,
  projectOverviewDescription: PropTypes.string,
  toolsArray: PropTypes.array,
  codeLink: PropTypes.string,
};

function ProjectPage({
  projectNum,
  projectTitleDescription,
  appLink,
  imageUrl,
  projectOverviewDescription,
  toolsArray,
  codeLink,
}) {
  return (
    <>
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">Project {projectNum}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">{projectTitleDescription}</p>
          </div>
          <div className="project-cs-hero__cta">
            <a
              href={appLink}
              className="btn btn--bg"
              target="_blank"
              rel="noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <img
                src={imageUrl}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">
                  Project Overview
                </h3>
                <p className="project-details__desc-para">
                  {projectOverviewDescription}
                </p>
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  {toolsArray.map((tool) => (
                    <div className="skills__skill" key={tool}>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href={appLink}
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href={codeLink}
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
