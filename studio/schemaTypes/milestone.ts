import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'milestone',
  title: 'Timeline Milestone',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year / Period',
      type: 'string',
      description: 'e.g. 1961, 1980s, Today',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Milestone Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag Label',
      type: 'string',
      description: 'e.g. Foundation, Expansion, Landmark Event',
    }),
    defineField({
      name: 'isMajor',
      title: 'Is Major Milestone?',
      type: 'boolean',
      description: 'Major milestones are highlighted in red on the timeline',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Detail Items',
      type: 'array',
      description: 'Optional key facts shown in a box below the description',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first on the timeline',
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'title',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})