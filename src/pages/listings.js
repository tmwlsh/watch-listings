import React from "react"
import { Link } from "gatsby"

// components
import Layout from "../components/layout"
import WatchList from "../components/watchList"
import SEO from "../components/seo"
import Container from "../components/container"

// data
import watches from "../data/watches.json"

const ListingsPage = () => {

  return (
    <Layout>
      <SEO title="Listings" />
      <Container size="large">
        <WatchList watchData={watches} />
      </Container>
    </Layout>
  )
}

export default ListingsPage
