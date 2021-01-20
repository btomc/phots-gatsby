import React from "react"
import Heading from "../components/Heading"
import ContactSection from "../components/ContactSection"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Heading heading='Contact' />
    <ContactSection />
  </Layout>
)

export default Contact