import React from "react"

import "../../sass/main.scss";

import Header from "../header"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
