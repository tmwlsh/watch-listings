import { Link } from "gatsby"
import React from "react"
import CurrencyFormat from 'react-currency-format';

import styles from './watchBlock.module.scss';

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

const WatchBlock = ({watch}) => {
  console.log(watch);
  const watchCats = watch.categories ? watch.categories.map(cat => <li>{titleCase(cat)}</li>) : '';
  const url = `${watch.id}-${watch.make}-${watch.model}`.replace(/\s+/g, '-').toLowerCase()
  return (
    <Link key={`${watch.id}-${watch.make}-${watch.model}`} to={url} className={styles.watchBlock}>
      <div className={styles.watchBlockInner}>
        <div className={styles.watchBlockLeft}></div>
        <div className={styles.watchBlockRight}>
          <CurrencyFormat className={styles.watchPrice} value={watch.price} displayType={'text'} thousandSeparator={true} prefix={'£'} />
          <p className={styles.watchName}>{watch.make} {watch.model}</p>
          <div className={styles.watchDescription}>
            <p>{watch.description}</p>
          </div>
          <ul className={styles.watchCategories}>
            <li>{watch.yearMade}</li>
            {watchCats}
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default WatchBlock
