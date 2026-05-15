import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Archive Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'era',
      title: 'Era / Year',
      type: 'string',
      description: 'e.g. 1961, 1970s, 1986',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Camps & Expeditions', value: 'Camps & Expeditions' },
          { title: 'Events & Ceremonies', value: 'Events & Ceremonies' },
          { title: 'Jamborees', value: 'Jamborees' },
          { title: 'Patrol Activities', value: 'Patrol Activities' },
          { title: 'Badgework & Skills', value: 'Badgework & Skills' },
          { title: 'Historical', value: 'Historical' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Malé, Kuda Bandos, Vaavu Atoll',
    }),
    defineField({
      name: 'people',
      title: 'People in Photo',
      type: 'string',
      description: 'Names of identifiable people if known',
    }),
    defineField({
      name: 'verified',
      title: 'Verified',
      type: 'boolean',
      description: 'Has this photo been verified for accuracy?',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Photo',
      type: 'boolean',
      description: 'Show this photo prominently in the archive',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'era',
      media: 'image',
    },
  },
})