import React from "react"

// components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"


const WatchTemplate = (props, {pageContext}) => {

  const watch = props.pageContext.watch;

  return (
    <Layout>
      <SEO title={`${watch.make} ${watch.model}`} />
      <Container size="large">
        <h1>{`${watch.make} ${watch.model}`}</h1>
      </Container>
    </Layout>
  )
}

export default WatchTemplate
