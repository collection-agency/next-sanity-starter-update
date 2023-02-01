import {
  groq,
  createClient,
  createImageUrlBuilder,
} from 'next-sanity'
import Link from 'next/link'
import { definePreview } from 'next-sanity/preview'

const config = {
  /**
    * Find your project ID and dataset in `sanity.json` in your studio project.
    * These are considered “public”, but you can use environment variables
    * if you want differ between local dev and production.
    *
    * https://nextjs.org/docs/basic-features/environment-variables
    **/
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  /**
    * Set useCdn to `false` if your application require the freshest possible
    * data always (potentially slightly slower and a bit more expensive).
    * Authenticated request (like preview) will always bypass the CDN
    **/
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = source => {
  return createImageUrlBuilder(config).image(source)
}

// Set up the live preview hook
function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}
export const usePreview = definePreview({ config, onPublicAccessOnly })

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)
