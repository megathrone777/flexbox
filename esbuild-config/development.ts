import { context, type BuildOptions, type ServeOptions } from "esbuild";
import eslintPlugin from "esbuild-plugin-eslint";
import { esbuildTsChecker } from "esbuild-plugin-ts-checker";
import { cwd } from "process";
import { resolve } from "path";

import { options } from "./common";

const rootDir: string = cwd();
const publicDir: string = resolve(rootDir, "public");

const buildOptions: BuildOptions = {
  ...options,
  inject: ["./esbuild-config/livereload.ts"],
  metafile: true,
  outdir: `${publicDir}/js`,
  platform: "browser",
  plugins: [
    esbuildTsChecker({
      failOnError: false,
      tsconfig: resolve(rootDir, "tsconfig.json"),
      watch: true,
    }),
    eslintPlugin({
      throwOnError: false,
    }),
  ],
  sourcemap: "inline",
  write: false,
};

const serveOptions: ServeOptions = {
  fallback: `${publicDir}/index.html`,
  host: "localhost",
  port: 1337,
  servedir: publicDir,
};

(async (): Promise<void> => {
  const esbuildContext = await context(buildOptions);
  await esbuildContext.serve(serveOptions);
  await esbuildContext.watch();
})();
