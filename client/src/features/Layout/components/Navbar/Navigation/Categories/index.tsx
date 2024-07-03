import React from 'react'
import Button from './Button'
import Items from './Items';

import styles from "./Styles.module.css";



function index() {
  return (
    <div className={`${styles.container} group`}>
    <Button>Categories</Button>
    <div className={`${styles.categoriesMenu} z-30 group-hover:block`}>
      <Items />
    </div>
  </div>
  )
}

export default index