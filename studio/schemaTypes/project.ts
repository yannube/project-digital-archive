import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Scouting Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Health & Wellbeing, Adventure & Exploration',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sdg',
      title: 'SDG Alignment',
      type: 'string',
      description: 'e.g. SDG 3 — Good Health',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. 2024, 2024–2025',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'island',
      title: 'Location / Island',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Completed', value: 'Completed' },
          { title: 'Ongoing', value: 'Ongoing' },
          { title: 'Planned', value: 'Planned' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'objective',
      title: 'Objective',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'impact',
      title: 'Impact Statement',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'photos',
      title: 'Project Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
    },
  },
})