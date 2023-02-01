import { sanityClient } from 'utils/sanity'
import { configQuery } from 'utils/queries'
import Head from 'next/head'
import groq from 'groq'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Container from 'components/Container'

const query = groq`
  *[_type == 'post' && slug.current == $slug][0]
`

const Post = ({ doc, config }) => {
  return (
    <Layout>
      <Seo config={config} doc={doc} />
      {doc &&
        <section>
          <Container>
            <h1 className='text-2xl'>{doc.title}</h1>
          </Container>
        </section>
      }
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const doc = await sanityClient.fetch(query, {
    slug: params.slug,
  });
  const config = await sanityClient.fetch(configQuery)
  return {
    props: { doc, config }
  }
}

export const getStaticPaths = async () => {
  const routes = await getClient()
    .fetch(`*[_type == 'post'][].slug.current`)

  return {
    paths: routes.map((slug) => ({ params: { slug } })),
    fallback: true
  }
}

export default Post
