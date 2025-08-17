import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        recipe: resolve(__dirname, "recipe.html"),
        recipes: resolve(__dirname, "recipes.html"),
      },
    },
  },
});
