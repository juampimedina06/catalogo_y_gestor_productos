import React from 'react'
import styles from './Path.module.css'

const Path = ({ indicador, children }) => {
  return (
    <div className={styles.contenedor_indicador}>
      {children}
      <h2 className={styles.indicador}>{indicador}</h2>
    </div>
  )
}

export default Path
