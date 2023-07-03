import saurav from "../assets/img/saurav.png";
import options from "../assets/img/ham-menu.0ad1d7e0.svg";
import cross from "../assets/img/ham-menu-close.02924a77.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={saurav}
              alt="Saurav Meghwal Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Saurav meghwal</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="index.html" className="header__link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="/index.html#about" className="header__link">
                About{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="/index.html#projects" className="header__link">
                {" "}
                Projects{" "}
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="/index.html#contact" className="header__link">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src={options}
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src={cross}
              alt="hamburger menu close"
              className="d-none header__main-ham-menu-close"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="/index.html"> Home </a>
            </li>
            <li className="header__sm-menu-link">
              <a href="/index.html#about"> About </a>
            </li>
            <li className="header__sm-menu-link">
              <a href="/index.html#projects"> Projects </a>
            </li>
            <li className="header__sm-menu-link">
              <a href="/index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
