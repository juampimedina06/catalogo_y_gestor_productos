import styles from "./Pie.module.css";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import Path from "../Path/Path";

const Pie = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contenedor_footer}>
        <div className={styles.contenedor_imagen}>
          <div>
            {/*<img src="/img/bandera-roja.png" alt="" />*/}
          </div>
        <div>
          <ul>
            <a href=""><li></li></a>
            <a href=""><li></li></a>
            <a href=""><li></li></a>
          </ul>
        </div>
        <div>
          <ul>
            <a href=""><li></li></a>
            <a href=""><li></li></a>
            <a href=""><li></li></a>
          </ul>
        </div>
      </div>
        <div className={styles.contenedor_formulario}>
          <div className={styles.redes}>
            <Path indicador="Instagram">
            <a href="https://www.instagram.com/elpequehongkong/?__pwa=1" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            </Path>
            <Path indicador="Facebook">
            <a href="https://www.facebook.com/bazarmayoristaalem2874cordoba?mibextid=ZbWKwL" target="_blank" rel="noopener   noreferrer">
              <FaFacebook />
            </a>
            </Path>
            <Path indicador="TikTok">
            <a href="https://www.tiktok.com/@todo.lo.que.buscasss?lang=es" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </Path>
        </div>
        </div>
        <div className={styles.info}>
          <div className={styles.contenedor_derechos}>
            <p className={styles.texto_derechos}>© 2025 NOMBRE_NEGOCIO TODOS LOS DERECHOS RESERVADOS.</p>
          </div>
          <div className={styles.contenedor_autor}>
            <a
              href="/TerminosCondiciones"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.terminos}
            >
            TÉRMINOS Y CONDICIONES
            </a>

            <Path indicador={"ir a linkedin"}>
              <p className={styles.autor}>
              DESARROLLADO POR <a className={styles.linkedin} href="https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/">JUAN PABLO MEDINA</a>
            </p>
            </Path>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Pie;
