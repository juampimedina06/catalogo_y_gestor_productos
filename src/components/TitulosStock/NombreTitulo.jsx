import styles from './TitulosStock.module.css'

const NombreTitulo = ({nombre}) => {
  return (
    <div className={styles.contenedor_informacion_productos}><p className={styles.titulos_productos}>{nombre}</p></div>
  )
}

export default NombreTitulo