import { useState,useEffect } from 'react'
import CirculoCargar from '../../components/CirculoCargar/CirculoCargar'
import styles from "./Stock.module.css"
import BarraBusqueda from '../../components/BarraBusqueda/BarraBusqueda'
import ProductoStock from '../../components/ProductoStock/ProductoStock'
import TitulosStock from '../../components/TitulosStock/TitulosStock'
import ElementoNoEncontrado from '../../components/ElementoNoEncontrado/ElementoNoEncontrado'

const Stock = () => {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const [filtrador, setFiltrador] = useState('')
  // const [seleccionarId, setSeleccionarId] = ('')
  // const [eliminarProducto, setEliminarProducto] = (false)

  useEffect(() => {
    fetch("https://67c6be3c351c081993fe9984.mockapi.io/productos/producto")
    .then (response => response.json())
    .then (data =>{
      setProducto(data)
      setLoading(false)
    })
  },[])

  // function eliminarProducto = (id) => {
    
  // } 

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    if(name === 'filtrador'){
      setFiltrador(value)
    }
  }

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
        onChange={handleInputChange}
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
            <ProductoStock filtrarProductos={filtrarProductos} />
          </>
      )
      }
    </section>
    </>
  )
}

export default Stock