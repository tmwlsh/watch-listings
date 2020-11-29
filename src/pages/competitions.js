import React from "react"
import { Link } from "gatsby"

// components
import Layout from "../components/layout"
import CompList from "../components/compList"
import SEO from "../components/seo"
import Container from "../components/container"

// data
import competitions from "../data/competitions.json"

const CompetitionsPage = () => {

  return (
    <Layout>
      <SEO title="Competitions" />
      <Container size="large">
        <CompList compData={competitions} />
      </Container>
    </Layout>
  )
}

export default CompetitionsPage
