import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import deskStructure from './deskStructure'
import schemas from './schemas/schema'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'starter-update',
  projectId: 'ait2ve9f',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: deskStructure
    }),
    visionTool()
  ],
  schema: {
    types: schemas,
  },
})