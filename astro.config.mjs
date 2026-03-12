import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: "3ouwxorl",
      dataset: "production",
      apiVersion: "2025-01-01",
      useCdn: false,
      studioBasePath: "/studio",
    }),
  ],
});