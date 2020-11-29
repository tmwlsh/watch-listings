import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Container from "../components/container"
import Form from "../components/form"

const SignInPage = () => (
  <Layout>
    <SEO title="Sign Up" />
    <Container size="small">
      <Form>
        <h2>Sign Up</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Surname" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />
        <input type="submit" value="Sign Up" />
      </Form>
    </Container>
  </Layout>
)

export default SignInPage
