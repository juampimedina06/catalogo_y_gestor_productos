import { useState } from 'react'
import InformacionProducto from './InformacionProducto'
import styles from './ProductoStock.module.css'


const ProductoStock = ({filtrarProductos}) => {
  const [editar, setEditar] = useState(null)

  const editarProducto = (id) => {
      console.log("se quiere editar el produto con el nombre:", id)
      setEditar(id)
  }
  
  const eliminarProducto = () => {
    console.log("se quiere eliminar el producto con el nombre", )
  }

  return (
    <div >
      {filtrarProductos.map((producto)=> (
      <div key={producto.id} className={styles.barra_producto} >
        <div className={styles.contenedor_svg}><svg className={styles.svg_producto} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ad0707"><path d="M6.99979 7V3C6.99979 2.44772 7.4475 2 7.99979 2H20.9998C21.5521 2 21.9998 2.44772 21.9998 3V16C21.9998 16.5523 21.5521 17 20.9998 17H17V20.9925C17 21.5489 16.551 22 15.9925 22H3.00728C2.45086 22 2 21.5511 2 20.9925L2.00276 8.00748C2.00288 7.45107 2.4518 7 3.01025 7H6.99979ZM8.99979 7H15.9927C16.549 7 17 7.44892 17 8.00748V15H19.9998V4H8.99979V7ZM4.00255 9L4.00021 20H15V9H4.00255Z"></path></svg></div>
        {editar == producto.id 
        ? 
          <p>hola</p>
        :
          <>
            <InformacionProducto productoInformacion={producto.codigo}  />
            <InformacionProducto productoInformacion={producto.nombre} />
            <InformacionProducto productoInformacion={producto.cantidad} />
            <InformacionProducto productoInformacion={producto.categoria} />
            <InformacionProducto productoInformacion={producto.precio} texto='$' /> 
          </>
        }
        
        <div className={styles.contenedor_boton_productos}>
          <button className={styles.boton_actualizar} onClick={() => editarProducto(producto.id)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(247,243,243,1)"><path d="M16.7574 2.99678L14.7574 4.99678H5V18.9968H19V9.23943L21 7.23943V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99678C3 3.4445 3.44772 2.99678 4 2.99678H16.7574ZM20.4853 2.09729L21.8995 3.5115L12.7071 12.7039L11.2954 12.7064L11.2929 11.2897L20.4853 2.09729Z"></path></svg></button>
          <button className={styles.boton_eliminar} onClick={() => eliminarProducto(producto.nombre)} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg></button>
        </div>
      </div> 
      ))
    }
    </div>
  )
}

export default ProductoStock



