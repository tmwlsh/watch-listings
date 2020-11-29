import { Link } from "gatsby"
import React from "react"
import Container from "../container"

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="large">
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <h1><Link to="/">CompWorld</Link></h1>
            <nav>
              <ul>
                <li><Link to="/competitions">Competitions</Link></li>
                <li><Link to="/competitions">Winners</Link></li>
                <li><Link to="/competitions">About</Link></li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerRight}>
            <nav>
              <ul>
                <li><Link to="/sign-in">Sign in</Link></li>
                <li><Link to="/sign-up">Sign up</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
