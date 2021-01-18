import React from "react"
import ServicesCards from "../components/ServicesCards"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Heading heading='Services' />
    <ServicesCards />
  </Layout>
)

export default Services
