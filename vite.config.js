// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/static/",
    build: {
        manifest: "manifest.json",
        outDir: resolve("./assets"),
        assetsDir: "Django-assets",
        rollupOptions: {
            input: {
                test: resolve("./main.js") // Removido a barra inicial
            }
        }
    }
});

// Alternativa se você estiver usando CommonJS (se o erro persistir):
/*
const { defineConfig } = require("vite");
const { resolve } = require("path");

module.exports = defineConfig({
    base: "/static/",
    build: {
        manifest: "manifest.json",
        outDir: resolve("./assets"),
        rollupOptions: {
            input: {
                test: resolve("./main.js")
            }
        }
    }
});
*/