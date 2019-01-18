import autoprefixer from "autoprefixer";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const esm = {
  plugins: [
    typescript({
      useTsconfigDeclarationDir: false
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extensions: [".css"],
      inject: false
    })
  ],
  input: "lib/side-drawer.ts",
  output: {
    file: "dist/side-drawer.mjs",
    format: "esm"
  }
};

const iife = {
  plugins: [
    typescript({
      useTsconfigDeclarationDir: false
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extensions: [".css"],
      inject: false
    })
  ],
  input: "lib/side-drawer.ts",
  output: {
    file: "dist/side-drawer.js",
    format: "iife",
    name: "SideDrawer"
  }
};

const iifeMin = {
  plugins: [
    typescript({
      useTsconfigDeclarationDir: false
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: false,
      extensions: [".css"],
      inject: false,
      minimize: true
    }),
    terser({
      compress: { ecma: 6 }
    })
  ],
  input: "lib/side-drawer.ts",
  output: {
    file: "dist/side-drawer-min.js",
    format: "iife",
    name: "SideDrawer"
  }
};

export default [esm, iife, iifeMin];
