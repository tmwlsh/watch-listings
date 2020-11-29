import { Link } from "gatsby"
import React from "react"

import CompBlock from "../compBlock"

import styles from './compList.module.scss';

const CompList = ({compData}) => {

  const compList = compData.map(comp => {
    return (
      <CompBlock key={comp.prize.replace(/\s+/g, '-').toLowerCase()} comp={comp} />
    )
  })

  return (
    <ul className={styles.compList}>
      {compList}
    </ul>
  )
}

export default CompList
