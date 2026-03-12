import {defineField, defineType} from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {source: "title", maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{type: "string"}],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {hotspot: true},
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "Paste a YouTube, Vimeo, or Loom link",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{type: "block"}],
    }),
  ],
});