import * as oak from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { qrgen } from "../methods/qrcode.ts";
import { render } from './render.ts'

const port = 80;

const app = new oak.Application();
const route = new oak.Router();

route.all("/:item", async (ctx) => {
  ctx.response.status = 200;
  ctx.response.headers.set("Content-Type", "text/html"); // set
  ctx.response.body = await render({"src": `${await qrgen(ctx.params.item)}`})
});

app.use(route.routes());

export async function serve() {
  app.addEventListener("listen", ({ secure, hostname, port }) => {
    const protocol = secure ? "https://" : "http://";
    const url = `${protocol}${hostname ?? "localhost"}:${port}`;
    console.log(`Listening on: ${url}`);
  });

  await app.listen({ port });
}
