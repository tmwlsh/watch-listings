import { Link } from "gatsby"
import React from "react"
import Container from "../container"

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container size="large">
        <div className={styles.footerInner}>
          <h1>Footer</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Work</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
