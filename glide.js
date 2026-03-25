import.meta.hot.accept();
import Glide from "@glidejs/glide";

new Glide(".glide", {
  type: "slider",
  perView: 1,
  startAt: 0,
  keyboard: true,
//   breakpoints: {
//     800: {
//       perView: 2,
//     },
//     480: {
//       perView: 1,
//     },
//   },
}).mount();
