import linkedin from "../assets/img/linkedin-ico.3f957e0b.png";
import github from "../assets/img/github-ico.88313fb1.png";
import twitter from "../assets/img/twitter-ico.a32e0714.png";
import instagram from "../assets/img/insta-ico.591e5943.png";

function HomeHero() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__content">
          <h2 className="heading-primary">
            <span className="fd">I&apos;m Saurav, frontend Engineer</span>
          </h2>
          <div className="home-hero__info">
            <p className="text-primary">
              Designing captivating, functional websites that solve problems and
              leave a lasting impression.
            </p>
          </div>
          <div className="home-hero__cta">
            <a href="./#projects" className="btn btn--bg">
              Projects
            </a>
          </div>
        </div>
        <div className="home-hero__socials">
          <div className="home-hero__social">
            <a
              href="https://linkedin.com/in/sauravmeghwal"
              className="home-hero__social-icon-link"
            >
              <img
                src={linkedin}
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://github.com/sauravmeghwal"
              className="home-hero__social-icon-link"
            >
              <img
                src={github}
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          <div className="home-hero__social">
            <a
              href="https://twtiter.com/sauravmeghwal"
              className="home-hero__social-icon-link"
            >
              <img
                src={twitter}
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div>
          {/* <!-- I don't have YouTube --> */}
          {/* <!-- <div className="home-hero__social">
          <a
            href="https://.com/sauravmeghwal"
            className="home-hero__social-icon-link"
          >
            <img
              src="/yt-ico.909381c6.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div> --> */}
          <div className="home-hero__social">
            <a
              href="https://instagram.com/sauravmeghwal"
              className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            >
            <img
              src={instagram}
              alt="icon"
              className="home-hero__social-icon"
            /></a>
          </div>
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </section>
    </>
  );
}

export default HomeHero;
