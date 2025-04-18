import styles from './ProductoStock.module.css'

const InformacionProducto = ({productoInformacion, texto}) => {
  return (
        <div className={styles.contenedor_informacion_productos}><p className={styles.informacion_producto}>{texto}{productoInformacion}</p></div>  
    )
}

export default InformacionProducto