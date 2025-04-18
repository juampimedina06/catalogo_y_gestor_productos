import styles from './ElementoNoEncontrado.module.css'

const ElementoNoEncontrado = ({tipoDato}) => {
  return (
    <div className={styles.contenedor_no_encontrado}>
        <p className={styles.parrafo_no_encontrado}>No se encontro producto con ese {tipoDato}</p>
        <img className={styles.imagen_no_encontrado} src="/img/elemento_no_encontrado.png" alt="" />
    </div>
  )
}

export default ElementoNoEncontrado