import React from 'react'
import styles from "./Titulo.module.css"

const Titulo = ({titulo}) => {
  return (
    <h2 className={styles.titulo}>"{titulo}"</h2>
  )
}

export default Titulo