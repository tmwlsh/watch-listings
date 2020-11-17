import { Link } from "gatsby"
import React from "react"

import styles from './container.module.scss';

const Container = ({children, size="medium"}) => {
  const classes = ['container', styles.container, styles[size]];
  return (
    <div className={classes.join(" ")}>
      {children}
    </div>
  )
}

export default Container
