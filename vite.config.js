import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; //Insert to support vue
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        vue(), //insert to support vite
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
});
