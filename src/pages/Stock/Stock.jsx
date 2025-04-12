import { useState,useEffect } from 'react'
import CirculoCargar from '../../components/CirculoCargar/CirculoCargar'
import styles from "./Stock.module.css"


const Stock = () => {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch("https://67c6be3c351c081993fe9984.mockapi.io/productos/producto")
    .then (response => response.json())
    .then (data =>{
      setProducto(data)
      setLoading(false)
      console.log(data)
    })
  },[])



if (loading){
  return <CirculoCargar />
}
  return (
    <>
    <header className={styles.contenedor_barra_buscadora}>
    <form action="" className={styles.form}>
    <button type='submit'><svg className={styles.lupa} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(153,153,153,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg></button>
      <input 
        className={styles.barra_buscadora} 
        type="text" 
        placeholder='Introduzca el codigo del producto' 
        name="" 
        id="" 
      />
    </form>
    </header>
    <section className={styles.contenedor_productos}>
      <div className={styles.referencia_titulo_productos}>
        <div className={styles.contenedor_svg}></div>
        <div className={styles.contenedor_informacion_productos}><p className={styles.titulos_productos}>CODIGO</p></div>
        <div className={styles.contenedor_informacion_productos}><p className={styles.titulos_productos}>NOMBRE</p></div>
        <div className={styles.contenedor_informacion_productos}><p className={styles.titulos_productos}>CANTIDAD</p></div>
        <div className={styles.contenedor_informacion_productos}><p className={styles.titulos_productos}>CATEGORIA</p></div>
        <div className={styles.contenedor_informacion_productos}></div>
      </div>
      {producto.map((producto)=>{
      return <div key={producto.id} className={styles.barra_producto}>
        <div className={styles.contenedor_svg}><svg className={styles.svg_producto} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ad0707"><path d="M6.99979 7V3C6.99979 2.44772 7.4475 2 7.99979 2H20.9998C21.5521 2 21.9998 2.44772 21.9998 3V16C21.9998 16.5523 21.5521 17 20.9998 17H17V20.9925C17 21.5489 16.551 22 15.9925 22H3.00728C2.45086 22 2 21.5511 2 20.9925L2.00276 8.00748C2.00288 7.45107 2.4518 7 3.01025 7H6.99979ZM8.99979 7H15.9927C16.549 7 17 7.44892 17 8.00748V15H19.9998V4H8.99979V7ZM4.00255 9L4.00021 20H15V9H4.00255Z"></path></svg></div>
        <div className={styles.contenedor_informacion_productos}><p className={styles.informacion_producto}>{producto.codigo}</p></div>
        <div className={styles.contenedor_informacion_productos}><p className={styles.informacion_producto}>{producto.nombre}</p></div>
        <div className={styles.contenedor_informacion_productos}><p className={styles.informacion_producto}>{producto.cantidad}</p></div>
        <div className={styles.contenedor_informacion_productos}><p className={styles.informacion_producto}>{producto.categoria}</p></div>
        <div className={styles.contenedor_informacion_productos}>
        <button className={styles.boton_actualizar}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(247,243,243,1)"><path d="M16.7574 2.99678L14.7574 4.99678H5V18.9968H19V9.23943L21 7.23943V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99678C3 3.4445 3.44772 2.99678 4 2.99678H16.7574ZM20.4853 2.09729L21.8995 3.5115L12.7071 12.7039L11.2954 12.7064L11.2929 11.2897L20.4853 2.09729Z"></path></svg></button>
        <button className={styles.boton_eliminar}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg></button>
        </div>
      </div> 
      })}
    </section>
    </>
  )
}

export default Stock