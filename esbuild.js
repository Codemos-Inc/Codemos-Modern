const esbuild = require("esbuild");

const production = process.argv.includes("--prod");

async function main() {
  await esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    format: "cjs",
    minify: production,
    sourcemap: !production,
    sourcesContent: false,
    platform: "node",
    outfile: "out/bin/main.js",
    external: ["vscode"],
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
