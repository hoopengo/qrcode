import { renderFile } from "https://deno.land/x/mustache_ts@v0.4.1.1/mustache.ts";

export async function render(view: Record<string, unknown>) {
  view['css'] = './src/css/main.css'
  return await renderFile("./src/views/main.html", view);
}
