import React from "react"

import styles from './form.module.scss';

const Form = ({children}) => {
  return (
    <div className={styles.form}>
      <form>
        {children}
      </form>
    </div>
  )
}

export default Form
