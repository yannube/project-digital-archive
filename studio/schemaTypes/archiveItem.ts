import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'archiveItem',
  title: 'Archive Item',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),

    defineField({
      name: 'category',
  title: 'Category',
  type: 'string',
  options: {
    list: [
      { title: 'History', value: 'history' },
      { title: 'Photo', value: 'photo' },
      { title: 'Veteran', value: 'veteran' },
      { title: 'Project', value: 'project' },
      { title: 'Resource', value: 'resource' },
        ],
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'contributor',
      title: 'Contributor',
      type: 'string',
    }),

    defineField({
      name: 'source',
      title: 'Source / Reference',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})