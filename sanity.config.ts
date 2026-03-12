import {defineConfig} from "sanity";
import {structureTool} from "sanity/structure";
import {schemaTypes} from "./src/sanity/schemaTypes";

export default defineConfig({
  projectId: "3ouwxorl",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});