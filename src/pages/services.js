import React from "react"
import ServicesCards from "../components/ServicesCards"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import Testimonials from "../components/Testimonials"
import { SliderData } from "../data/SliderData"
import { CardsData } from "../data/CardsData"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Heading heading='Services' />
    <ServicesCards cards={CardsData} />
    <Testimonials slides={SliderData} />
  </Layout>
)

export default Services
