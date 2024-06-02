import { type BuildOptions, build } from "esbuild";
import eslintPlugin from "esbuild-plugin-eslint";
import { clean } from "esbuild-plugin-clean";
import { esbuildTsChecker } from "esbuild-plugin-ts-checker";
import { cwd } from "process";
import { cp } from "fs/promises";
import { resolve } from "path";

import { options } from "./common";

const rootDir: string = cwd();
const buildDir: string = resolve(rootDir, "build");

const productionOptions: BuildOptions = {
  ...options,
  drop: ["console"],
  legalComments: "none",
  minify: true,
  outdir: `${buildDir}/js`,
  plugins: [
    clean({
      cleanOn: "start",
      patterns: ["build", "public/js"],
      sync: false,
      verbose: false,
    }),
    esbuildTsChecker({
      enableBuild: true,
      failOnError: true,
      tsconfig: resolve(rootDir, "tsconfig.json"),
      watch: false,
    }),
    eslintPlugin({
      throwOnError: true,
    }),
  ],
  write: true,
};

(async (): Promise<void> => {
  console.info("\x1b[32m%s\x1b[0m", "Compiling...");
  const { errors, warnings } = await build(productionOptions);

  if (errors.length) {
    console.error(errors);
    process.exit(1);
  }

  if (warnings.length) {
    console.warn(warnings);
    return;
  }

  await cp(resolve(rootDir, "public"), buildDir, {
    recursive: true,
  });
})();
