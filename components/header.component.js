export class HeaderComponent extends HTMLElement {

  connectedCallback() {
    const template = document.getElementById("header-template");
    this.appendChild(template.content);

    const hamMenuBtn = this.querySelector(
      ".header__main-ham-menu-cont",
    );
    const smallMenu = this.querySelector(".header__sm-menu");
    const headerHamMenuBtn = this.querySelector(
      ".header__main-ham-menu",
    );
    const headerHamMenuCloseBtn = this.querySelector(
      ".header__main-ham-menu-close",
    );
    const headerSmallMenuLinks = this.querySelectorAll(
      ".header__sm-menu-link",
    );

    hamMenuBtn.addEventListener("click", () => {
      if (smallMenu.classList.contains("header__sm-menu--active")) {
        smallMenu.classList.remove("header__sm-menu--active");
      } else {
        smallMenu.classList.add("header__sm-menu--active");
      }
      if (headerHamMenuBtn.classList.contains("d-none")) {
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
      } else {
        headerHamMenuBtn.classList.add("d-none");
        headerHamMenuCloseBtn.classList.remove("d-none");
      }
    });

    for (let i = 0; i < headerSmallMenuLinks.length; i++) {
      headerSmallMenuLinks[i].addEventListener("click", () => {
        smallMenu.classList.remove("header__sm-menu--active");
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
      });
    }

    const headerLogoContainer = this.querySelector(
      ".header__logo-container",
    );

    headerLogoContainer.addEventListener("click", () => {
      if (location.pathname == "/") {
        location.hash = "";
        return;
      }
      location.href = "index.html";
    });
  }

  disconnectedCallback() {
    // браузер вызывает этот метод при удалении элемента из документа
    // (может вызываться много раз, если элемент многократно добавляется/удаляется)
  }

  static get observedAttributes() {
    return [
      /* массив имён атрибутов для отслеживания их изменений */
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // вызывается при изменении одного из перечисленных выше атрибутов
  }

  adoptedCallback() {
    // вызывается, когда элемент перемещается в новый документ
    // (происходит в document.adoptNode, используется очень редко)
  }
}