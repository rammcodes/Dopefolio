import Alpine from "alpinejs";

import { HomeHeroComponent } from "./components/home-hero.component";
import { HeaderComponent } from "./components/header.component";
import { ProjectsComponent } from "./components/projects.component";
import { AboutComponent } from "./components/about.component";
import { ContactComponent } from "./components/contact.component";
import { FooterComponent } from "./components/footer.component";

window.Alpine = Alpine;

Alpine.start();


customElements.define("header-component", HeaderComponent, { extends: "header" });
customElements.define("home-hero-component", HomeHeroComponent, { extends: "section" });
customElements.define("projects-component", ProjectsComponent, { extends: "section" });
customElements.define("about-component", AboutComponent, { extends: "section" });
customElements.define("contact-component", ContactComponent, { extends: "section" });
customElements.define("footer-component", FooterComponent, { extends: "footer" });
