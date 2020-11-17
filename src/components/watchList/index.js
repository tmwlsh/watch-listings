import { Link } from "gatsby"
import React from "react"

import WatchBlock from "../watchBlock"

import styles from './watchList.module.scss';

const WatchList = ({watchData}) => {

  const watchList = watchData.map(watch => {
    return (
      <WatchBlock watch={watch} />
    )
  })

  console.log(styles);

  return (
    <ul className={styles.watchList}>
      {watchList}
    </ul>
  )
}

export default WatchList
