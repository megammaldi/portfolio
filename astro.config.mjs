// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: `https://megammaldi.github.io`,
  base: import.meta.env.DEV ? undefined : "portfolio",
  integrations: [tailwind()],
});
