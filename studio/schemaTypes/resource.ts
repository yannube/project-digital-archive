import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Scouting Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Scout Promise, Law & Motto', value: 'promise-law-motto' },
          { title: 'Scout Skills', value: 'scout-skills' },
          { title: 'Badgework Guides', value: 'badgework' },
          { title: 'Training Materials', value: 'training' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Resource Type',
      type: 'string',
      options: {
        list: [
          { title: 'Reference', value: 'Reference' },
          { title: 'Guide', value: 'Guide' },
          { title: 'Document', value: 'Document' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full content if displayed inline on the website',
    }),
    defineField({
      name: 'file',
      title: 'Downloadable File',
      type: 'file',
      description: 'Upload a PDF or document for download',
    }),
    defineField({
      name: 'available',
      title: 'Available Now',
      type: 'boolean',
      description: 'Toggle on when this resource is ready to publish',
      initialValue: false,
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
      subtitle: 'category',
    },
  },
})