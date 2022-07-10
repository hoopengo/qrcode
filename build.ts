import * as esbuild from "https://deno.land/x/esbuild@v0.14.39/mod.js";

await esbuild.build({
  entryPoints: ["/home/hoopengo/code/deno-24h-learn-challenge/app/src/main.ts"],
  outfile: "./dist/bundle.js",
  bundle: true,
  minify: true,
  format: "esm",
});
esbuild.stop();
