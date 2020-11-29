import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedComp from "../components/featuredComp"

import comps from "../data/competitions.json"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <FeaturedComp comp={comps[0]} />
    </Layout>
  )
}

export default IndexPage
