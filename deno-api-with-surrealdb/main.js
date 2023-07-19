import { bold, brightWhite, underline } from "colors";
import { Application, Router } from "oak";
import endPoints from "./src/routes.js";

const app = new Application();
const port = 8000;
const router = new Router();

app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  ctx.response.headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  await next();
});

/* router
  .get("/", endPoints.routes())
 */
app
  .use(endPoints.routes())
  .use(router.allowedMethods())
  .addEventListener("listen", ({ port, secure }) => {
    console.log("Servidor escuchando en " + brightWhite(bold(underline(`http${secure ? "s" : ""}://localhost:${port}`))));
  });

try {
  await app.listen({ port })
}
catch {
  await app.listen({ port: 3000 })
}
