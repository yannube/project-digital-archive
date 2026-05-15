import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'island',
  title: 'Island / Atoll Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Atoll / Island Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'code',
      title: 'Atoll Code',
      type: 'string',
      description: 'e.g. K, AA, V, GDh',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'capital',
      title: 'Capital Island',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Documentation Status',
      type: 'string',
      options: {
        list: [
          { title: 'Documented', value: 'Documented' },
          { title: 'Being Collected', value: 'Being Collected' },
          { title: 'Coming Soon', value: 'Coming Soon' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
      initialValue: 'Coming Soon',
    }),
    defineField({
      name: 'note',
      title: 'Short Note',
      type: 'text',
      rows: 2,
      description: 'Brief description shown on the atoll card',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full content for the individual island page',
    }),
    defineField({
      name: 'scoutGroups',
      title: 'Scout Groups',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Names of Scout groups active in this atoll',
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'status',
    },
  },
})