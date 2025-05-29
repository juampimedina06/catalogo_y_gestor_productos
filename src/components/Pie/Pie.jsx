import styles from "./Pie.module.css";
import { FaInstagram, FaFacebook, FaTiktok, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Path from "../Path/Path";

const Pie = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedor_footer}>
        <div className={styles.grid}>
          {/* Redes sociales */}
          <div className={styles.seccion}>
            <h4 className={styles.titulo}>Seguinos</h4>
            <div className={styles.redes}>
              <Path indicador="Instagram">
                <a href="https://www.instagram.com/elpequehongkong/?__pwa=1" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </Path>
              <Path indicador="Facebook">
                <a href="https://www.facebook.com/bazarmayoristaalem2874cordoba?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              </Path>
              <Path indicador="TikTok">
                <a href="https://www.tiktok.com/@todo.lo.que.buscasss?lang=es" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              </Path>
            </div>
          </div>

          {/* Navegación */}
          <div className={styles.seccion}>
            <h4 className={styles.titulo}>Tienda</h4>
            <ul className={styles.links}>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Ofertas</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          {/* Ayuda */}
          <div className={styles.seccion}>
            <h4 className={styles.titulo}>Ayuda</h4>
            <ul className={styles.links}>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="/TerminosCondiciones" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Seguimiento de pedidos</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.seccion}>
            <h4 className={styles.titulo}>Suscribite</h4>
            <p className={styles.descripcion}>Recibí ofertas y novedades antes que nadie.</p>
            <form className={styles.form}>
              <input type="email" placeholder="Tu email" className={styles.input} />
              <button type="submit" className={styles.boton}><MdEmail /></button>
            </form>
          </div>
        </div>

        {/* Medios de pago y derechos */}
        <div className={styles.bottom}>
          <div className={styles.pagos}>
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>

          <p className={styles.texto_derechos}>© 2025 NOMBRE_NEGOCIO — Todos los derechos reservados.</p>

          <Path indicador="ir a LinkedIn">
            <p className={styles.autor}>
              Desarrollado por <a className={styles.linkedin} href="https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/" target="_blank" rel="noopener noreferrer">Juan Pablo Medina</a>
            </p>
          </Path>
        </div>
      </div>
    </footer>
  );
};

export default Pie;
