import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/task-manager.ts",
  output: {
    file: "dist/task-manager.js",
    format: "iife",
  },
  plugins: [
    typescript()
  ]
};