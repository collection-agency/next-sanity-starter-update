export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
    },
  ],
  options: {
    collapsible: true,
  },
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
