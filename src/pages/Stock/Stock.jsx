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
    <button type='submit'><svg className={styles.lupa} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(153,153,153,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg></button>
      <input 
        className={styles.barra_buscadora} 
        type="text" 
        placeholder='Introduzca el codigo del producto' 
        name="" 
        id="" 
      />
    </header>
    <section className={styles.contenedor_productos}>
      <div className={styles.referencia_titulo_productos}></div>
      {producto.map((producto)=>{
      return <div key={producto.id} className={styles.barra_producto}>
        <svg className={styles.svg_producto} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(162,162,162,1)"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM6.49896 9.97089L11 12.5768V17.6252H13V12.5768L17.501 9.9709L16.499 8.24005L12 10.8447L7.50104 8.24004L6.49896 9.97089Z"></path></svg>
        <p className={styles.informacion_producto}>{producto.codigo}</p>
        <p className={styles.informacion_producto}>{producto.nombre}</p>
        <p className={styles.informacion_producto}>{producto.cantidad}</p>
        <p className={styles.informacion_producto}>{producto.categoria}</p>
        <button className={styles.boton_eliminar}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(194,13,13,1)"><path d="M17 4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7V2H17V4ZM9 9V17H11V9H9ZM13 9V17H15V9H13Z"></path></svg></button>
        <button className={styles.boton_actualizar}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(47,216,216,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM16.8201 17.0761C18.1628 15.8007 19 13.9981 19 12C19 8.13401 15.866 5 12 5C10.9391 5 9.9334 5.23599 9.03241 5.65834L10.0072 7.41292C10.6177 7.14729 11.2917 7 12 7C14.7614 7 17 9.23858 17 12H14L16.8201 17.0761ZM14.9676 18.3417L13.9928 16.5871C13.3823 16.8527 12.7083 17 12 17C9.23858 17 7 14.7614 7 12H10L7.17993 6.92387C5.83719 8.19929 5 10.0019 5 12C5 15.866 8.13401 19 12 19C13.0609 19 14.0666 18.764 14.9676 18.3417Z"></path></svg></button>
      </div> 
      })}
    </section>
    </>
  )
}

export default Stock