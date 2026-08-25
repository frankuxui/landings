// @ts-check
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://frankuxui.github.io",
  base: "/landings",
  integrations: [
    sitemap({
      /** @param {string} page */
      filter: (page) =>
        !page.includes("/preview/") && !page.includes("/render/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
