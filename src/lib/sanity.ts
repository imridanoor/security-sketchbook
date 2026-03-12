import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanity = createClient({
  projectId: "3ouwxorl",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(sanity);

export function urlFor(source: any) {
  return builder.image(source);
}