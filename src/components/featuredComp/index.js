import { Link } from "gatsby"
import React from "react"
import Container from "../container"
import CurrencyFormat from 'react-currency-format';

import styles from './featuredComp.module.scss';

const FeaturedComp = ({comp}) => {
  return (
    <div className={styles.featuredComp}>
      <Container size="medium">
        <div className={styles.featuredCompInner}>
          <div className={styles.featuredCompImage}>
            <div className={styles.featuredCompImageInner} />
          </div>
          <div className={styles.featuredCompContent}>
            <p>
              <CurrencyFormat value={comp.ticketPrice} displayType={'text'} thousandSeparator={true} prefix={'£'} />
              <span>
                (3 for {<CurrencyFormat value={comp.ticketPrice * 2.5} displayType={'text'} thousandSeparator={true} prefix={'£'} />})
              </span>
            </p>
            <h3>{comp.prize}</h3>
            <p><span>Cash Alternative: <CurrencyFormat value={comp.cashAlternative} displayType={'text'} thousandSeparator={true} prefix={'£'} /></span></p>
            <Link to="#">Enter Now</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FeaturedComp
