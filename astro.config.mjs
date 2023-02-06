import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image"; // https://astro.build/config

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});