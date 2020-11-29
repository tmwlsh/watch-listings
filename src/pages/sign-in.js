import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Form from "../components/form"

const SignInPage = () => (
  <Layout>
    <SEO title="Sign In" />
    <Container size="small">
      <Form>
        <h2>Sign In</h2>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Sign In" />
      </Form>
    </Container>
  </Layout>
)

export default SignInPage
