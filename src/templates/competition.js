import React from "react"

// components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"


const CompTemplate = (props, {pageContext}) => {

  const comp = props.pageContext.comp;

  return (
    <Layout>
      <SEO title={`${comp.prize}`} />
      <Container size="large">
        <h1>{`${comp.prize}`}</h1>
      </Container>
    </Layout>
  )
}

export default CompTemplate
