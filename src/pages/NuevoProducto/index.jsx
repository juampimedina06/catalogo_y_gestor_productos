import Formulario from "../../components/Formulario";
import styles from "./NuevoProducto.module.css";

function NuevoProducto() {
  return (
    <section className={styles.contenedor}>
      <div className={styles.contenedor_secundario}>
        <h2>Subir Producto</h2>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE PRODUCTO</p>
        <div className={styles.contenedor_formulario}>
          <Formulario />
        </div>
      </div>
    </section>
  )
}

export default NuevoProducto;