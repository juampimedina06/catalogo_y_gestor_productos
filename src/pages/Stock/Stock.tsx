import { useState,useEffect } from 'react'
import CirculoCargar from '../../components/CirculoCargar/CirculoCargar'
import styles from "./Stock.module.css"
import BarraBusqueda from '../../components/BarraBusqueda/BarraBusqueda'
import ProductoStock from '../../components/ProductoStock/ProductoStock'
import TitulosStock from '../../components/TitulosStock/TitulosStock'
import ElementoNoEncontrado from '../../components/ElementoNoEncontrado/ElementoNoEncontrado'
import servicioProducto from "../../services/productos"
import Notificacion from '../../components/Notificacion/Notificacion'
import { useForm } from '../../hooks/useForm'

const Stock = () => {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const [notificacionPersona, setNotificacionPersona] = useState('')
  const [tipoNotificacion, setTipoNotificacion] = useState(null)
  
  useEffect(() => {
    servicioProducto
    .obtener()
    .then (data =>{
      setProducto(data)
      setLoading(false)
    })
  },[])

  const {handleChange, filtrador} = useForm({
    filtrador:'',
  })

  const filtrarProductos = producto.filter(producto =>
    producto.codigo.toLowerCase().includes(filtrador.toLowerCase()))

  if (loading){
    return <CirculoCargar />
  }

  return (
    <>
    <header className={styles.contenedor_barra}>
      <BarraBusqueda
        placeholder='Introduzca el codigo del producto' 
        value={filtrador}
        onChange={handleChange}
        name='filtrador'
      />
    </header>
    <section className={styles.contenedor_productos}>
      {
        filtrarProductos.length === 0 
          ? <ElementoNoEncontrado tipoDato="codigo" />
          : (
          <>
            <TitulosStock />
            <ProductoStock 
              filtrarProductos={filtrarProductos} 
              actualizarProductoEstado={setProducto}
              eliminarProductoEstado={setProducto}
              mensajeNotificacion={setNotificacionPersona}
              tipoNotificacion={setTipoNotificacion}
            />
          </>
      )
      }
    </section>
    <Notificacion mensaje={tipoNotificacion} clase={notificacionPersona}  />
    </>
  )
}

export default Stock