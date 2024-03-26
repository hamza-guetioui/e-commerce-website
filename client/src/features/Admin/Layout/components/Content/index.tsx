import React from 'react'
import styles from "./Styles.module.css"

function index({ children }: { children: React.ReactNode }) {
  return (
    
      <div className={styles.content}>
        {children}
      </div>
        
  )
}

export default index