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
            <h1><Link to="/">WatchTrader</Link></h1>
            <nav>
              <ul>
                <li><Link to="/listings">Used watches</Link></li>
                <li><Link to="/listings">New watches</Link></li>
                <li><Link to="/listings">Sell your watch</Link></li>
                <li><Link to="/listings">Value your watch</Link></li>
                <li><Link to="/listings">Watch reviews</Link></li>
                <li><Link to="/listings">Insurance</Link></li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerRight}>
            <nav>
              <ul>
                <li><Link to="/listings">Sign in</Link></li>
                <li><Link to="/listings">Sign up</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
