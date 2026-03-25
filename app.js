import project from "./project_simple-arcade.html";
import homepage from "./index.html";

const server = Bun.serve({
  routes: {
    "/": homepage,
    "/project_simple-arcade.html": project,
  }
});

console.log(`Listening on ${server.url}`);