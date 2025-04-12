import React from "react";
import styles from "./Pie.module.css";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import FormDialog from "./FormDialog";
import Path from "../Path/Path";


const Pie = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <h3 className={styles.h3}>
          Desarrollado por <a className={styles.span} href="https://www.linkedin.com/in/juan-pablo-medina-199b3b2b4/">Juan Pablo Medina</a> para <span className={styles.span}>El pequeño honk cong</span>
        </h3>
        <img className={styles.bandera} src="/img/bandera-roja.png" alt="Bandera" />
      </div>
      <div className={styles.formContainer}>
        <FormDialog />
      </div>
      <div className={styles.redes}>
        <Path indicador="Instagram">
        <a href="https://www.instagram.com/elpequehongkong/?__pwa=1" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        </Path>
        <Path indicador="Facebook">
        <a href="https://www.facebook.com/bazarmayoristaalem2874cordoba?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        </Path>
        <Path indicador="TikTok">
        <a href="https://www.tiktok.com/@todo.lo.que.buscasss?lang=es" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        </Path>
      </div>
      <Path indicador="Ver Ubicacion en google maps">
      <div className={styles.direccionContainer}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff">
      <path d="M17.0839 15.812C19.6827 13.0691 19.6379 8.73845 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.36205 8.73845 4.31734 13.0691 6.91612 15.812C7.97763 14.1228 9.8577 13 12 13C14.1423 13 16.0224 14.1228 17.0839 15.812ZM8.38535 17.2848L12 20.8995L15.6147 17.2848C14.9725 15.9339 13.5953 15 12 15C10.4047 15 9.0275 15.9339 8.38535 17.2848ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10ZM12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12Z">
      </path>
      </svg>
      <a href="https://www.google.com/maps/place/Mayorista+Hong+Kong/@-31.3758388,-64.1515832,17z/data=!3m1!4b1!4m6!3m5!1s0x943299c5b9129305:0x3ca405010ac888d3!8m2!3d-31.3758388!4d-64.1515832!16s%2Fg%2F11hgfmcjbv?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" className={styles.direccion}> CAv. Leandro N. Alem 2874, X5012 Córdoba</a>
      </div>
      </Path>
    </footer>
  );
};

export default Pie;
