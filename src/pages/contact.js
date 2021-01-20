import React from "react"
import Heading from "../components/Heading"
import ContactSection from "../components/ContactSection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactImages from "../components/ContactImages"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Heading heading='Contact' />
    <ContactImages headingSmall='In our lens' />
    <ContactSection />
  </Layout>
)

export default Contact