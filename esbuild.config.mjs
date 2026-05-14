import esbuild from "esbuild";
import process from "node:process";

const production = process.argv.includes("--prod");

await esbuild.build({
  entryPoints: ["source/main.ts"],
  bundle: true,
  format: "cjs",
  minify: production,
  sourcemap: !production,
  sourcesContent: false,
  platform: "node",
  outfile: "out/bin/main.js",
  external: ["vscode"],
});
