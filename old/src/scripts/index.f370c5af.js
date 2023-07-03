const e = document.querySelector(".header__main-ham-menu-cont"),
  n = document.querySelector(".header__sm-menu"),
  s = document.querySelector(".header__main-ham-menu"),
  t = document.querySelector(".header__main-ham-menu-close"),
  a = document.querySelectorAll(".header__sm-menu-link");
e.addEventListener("click", () => {
  n.classList.contains("header__sm-menu--active")
    ? n.classList.remove("header__sm-menu--active")
    : n.classList.add("header__sm-menu--active"),
    s.classList.contains("d-none")
      ? (s.classList.remove("d-none"), t.classList.add("d-none"))
      : (s.classList.add("d-none"), t.classList.remove("d-none"));
});
for (let e = 0; e < a.length; e++)
  a[e].addEventListener("click", () => {
    n.classList.remove("header__sm-menu--active"),
      s.classList.remove("d-none"),
      t.classList.add("d-none");
  });
const c = document.querySelector(".header__logo-container");
c.addEventListener("click", () => {
  location.href = "index.html";
});
//# sourceMappingURL=index.f370c5af.js.map
