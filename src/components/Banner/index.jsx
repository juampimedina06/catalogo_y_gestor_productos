import styles from "./Banner.module.css"

const Banner = () => {
  return (
    <div className={styles.contenedor}> 
      <div className={styles.contenedor_texto}>
          <h3 className={styles.h3}>El pequeño Hong Kong</h3>
          <p className={styles.parrafo}>Local mayorista y minorista comprometido en ofrecer los mejores productos a precios competitivos. Calidad y variedad para todos nuestros clientes.</p>
          <a href='https://www.google.com/maps/place/Mayorista+Hong+Kong/@-31.3758342,-64.1541581,17z/data=!3m1!4b1!4m6!3m5!1s0x943299c5b9129305:0x3ca405010ac888d3!8m2!3d-31.3758388!4d-64.1515832!16s%2Fg%2F11hgfmcjbv?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D' className={styles.boton}>ver ubicacion</a>
      </div>
    </div>
  )
}

export default Banner