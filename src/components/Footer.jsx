import linkedin from "../assets/img/linkedin-ico.3f957e0b.png";
import github from "../assets/img/github-ico.88313fb1.png";
import twitter from "../assets/img/twitter-ico.a32e0714.png";
import instagram from "../assets/img/insta-ico.591e5943.png";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="main-container">
          <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
              <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
              </h2>
              <div className="main-footer__social-cont">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://linkedin.com/in/sauravmeghwal"
                >
                  <img
                    className="main-footer__icon"
                    src={linkedin}
                    alt="icon"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/sauravmeghwal"
                >
                  <img
                    className="main-footer__icon"
                    src={github}
                    alt="icon"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/sauravmeghwal"
                >
                  <img
                    className="main-footer__icon"
                    src={twitter}
                    alt="icon"
                  />
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/sauravmeghwal"
                >
                  <img
                    className="main-footer__icon main-footer__icon--mr-none"
                    src={instagram}
                    alt="icon"
                  />
                </a>
              </div>
            </div>
            <div className="main-footer__row main-footer__row-2">
              <h4 className="heading heading-sm text-lt">Saurav Meghwal</h4>
              <p className="main-footer__short-desc">
                TECH | BUSINESS | DESIGN
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
