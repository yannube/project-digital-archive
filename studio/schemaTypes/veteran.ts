import { defineField, defineType } from "sanity";

export default defineType({
  name: "veteran",
  title: "Veteran Scout",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),

    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
    }),

    defineField({
      name: "role",
      title: "Scout Role / Title",
      type: "string",
    }),

    defineField({
      name: "era",
      title: "Era / Years Active",
      type: "string",
    }),

    defineField({
      name: "island",
      title: "Home Island / Atoll",
      type: "string",
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),

    defineField({
      name: "excerpt",
      title: "Short Excerpt",
      type: "text",
    }),

    defineField({
      name: "fullStory",
      title: "Full Story",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "birthDate",
      title: "Birth Date",
      type: "string",
    }),

    defineField({
      name: "profilePhoto",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "heroBackground",
      title: "Hero Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "gallery",
      title: "Historical Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    defineField({
      name: "timeline",
      title: "Timeline Milestones",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "year",
              title: "Year",
              type: "string",
            },
            {
              name: "event",
              title: "Event",
              type: "text",
            },
          ],
        },
      ],
    }),

    defineField({
  name: "interviewVideo",
  title: "Interview Video File",
  type: "file",
  options: {
    accept: "video/*",
  },
  description: "Upload the veteran interview video file here.",
}),

    defineField({
      name: "quote",
      title: "Featured Quote",
      type: "text",
    }),

    defineField({
      name: "awards",
      title: "Awards / Recognition",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});