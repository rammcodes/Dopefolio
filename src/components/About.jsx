import about from  '../assets/img/about.gif'

function About() {
  return (
    <>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
              I think from business stand before making the code because I
              believe we can code anything but the commercial part of it matters
              the most.
            </span>
          </h2>
          <div className="about__content">
            <div className="about__content-skills">
              <img src={about} />
            </div>

            <div className="about__content-main">
              <h3 className="about__content-title">Get to know me!</h3>
              <div className="about__content-details">
                <p className="about__content-details-para">
                  Hey! It&#39;s <strong>Saurav</strong> I&#39;m a
                  <strong> Frontend Engineer </strong>living in{" "}
                  <em>&#39;Nanda Ji ki Badi&#39; </em> and a Person who
                  understands businesses and designs very well, because that is
                  kind of innate quality of me. I&#39;ve done made some cool
                  Frontend Projects you can see them on my portfolio
                </p>
                <p className="about__content-details-para">
                  Apart from being tech person I have very good business stand
                  as I have worked with <strong>2️⃣ Startups</strong> as a
                  co-founder in my early age. I&#39;m very good at thinking from
                  customer&#39;s <strong>POV</strong>. I understand Indian
                  consumers very well.
                </p>
              </div>
              <a
                href="./#contact"
                className="btn btn--med btn--theme dynamicBgClr"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
