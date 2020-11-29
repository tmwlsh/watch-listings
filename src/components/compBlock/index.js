import { Link } from "gatsby"
import React from "react"
import CurrencyFormat from 'react-currency-format';

import styles from './compBlock.module.scss';

const CompBlock = ({comp}) => {
  const url = `${comp.id}-${comp.prize}`.replace(/\s+/g, '-').toLowerCase()
  return (
    <Link key={`${comp.id}-${comp.make}-${comp.model}`} to={url} className={styles.compBlock}>
      <div className={styles.compBlockInner}>
        <div className={styles.compBlockLeft}>
          <img src={`./images/${comp.image}`} />
        </div>
        <div className={styles.compBlockRight}>
          <CurrencyFormat className={styles.compPrice} value={comp.ticketPrice} displayType={'text'} thousandSeparator={true} prefix={'£'} />
          <p className={styles.compName}>{comp.prize}</p>
          <div className={styles.compDescription}>
            <p className={styles.compCashAlternative}>Cash Alternative: <CurrencyFormat value={comp.cashAlternative} displayType={'text'} thousandSeparator={true} prefix={'£'} /></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CompBlock
