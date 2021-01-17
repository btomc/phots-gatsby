import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <p>HELLOPOP</p>
      <p>HELLOPOP</p>
      <p>HELLOPOP</p>
      <p>HELLOPOP</p>
      <p>HELLOPOP</p>
      <p>HELLOPOP</p>
      <p>HELLOPOP</p>
      <p>HELLOPOP</p>
      <p>HELLOPOP</p>
      <p>HELLOPOP</p>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
