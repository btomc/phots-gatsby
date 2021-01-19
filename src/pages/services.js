import React from "react"
import ServicesCards from "../components/ServicesCards"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Testimonials from "../components/Testimonials"
import { SliderData } from "../data/SliderData"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Heading heading='Services' />
    <ServicesCards />
    <Testimonials slides={SliderData} />
  </Layout>
)

export default Services
