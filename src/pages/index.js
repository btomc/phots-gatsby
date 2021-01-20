import React from "react"
import Hero from "../components/Hero"
import Images from "../components/Images"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Images headingSmall='View our photos' />
  </Layout>
)

export default IndexPage
