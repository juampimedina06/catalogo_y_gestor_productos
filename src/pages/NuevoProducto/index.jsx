import { useState } from "react";
import FormularioNuevoProducto from "../../components/FormularioNuevoProducto/FormularioNuevoProducto";
import styles from "./NuevoProducto.module.css";
import servicioProductos from "../../components/services/servicioProductos";

function NuevoProducto() {
  const [nombreProducto, setNombreProducto] = useState("")
  const [precioProducto, setPrecioProducto] = useState("")
  const [fechaProducto, setFechaProducto] = useState("")
  const [codigoProducto, setCodigoProducto] = useState("")
  const [descripcionProducto, setDescripcionProducto] = useState("")
  const [categoriaProducto, setCategoriaProducto] = useState("")
  const [cantidadProducto, setCantidadProducto] = useState("")
  const [imagenPrincipal, setImagenPrincipal] = useState("")
  const [imagenDos, setImagenDos] = useState("")
  const [imagenTres, setImagenTres] = useState("")
  const [imagenCuatro, setImagenCuatro] = useState("")
  const [imagenCinco, setImagenCinco] = useState("")


  const handleInputOnchange = (e) =>{
    const {name, value} = e.target
    
    switch(name){
      case 'nombre':
        setNombreProducto(value)
      break
      case 'precio':
        setPrecioProducto(value)
      break
      case 'fecha':
        setFechaProducto(value)
      break
      case 'codigo':
        setCodigoProducto(value)
      break
      case 'descripcion':
        setDescripcionProducto(value)
      break
      case 'categoria':
        setCategoriaProducto(value)
      break
      case 'cantidad':
        setCantidadProducto(value)
      break
      case 'imagenPrincipal':
        setImagenPrincipal(value)
      break
      case 'imagenDos':
        setImagenDos(value)
      break
      case 'imagenTres':
        setImagenTres(value)
      break
      case 'imagenCuatro':
        setImagenCuatro(value)
      break
      case 'imagenCinco':
        setImagenCinco(value)
      break
    }
  }

  const subirProducto = (e) => {
    e.preventDefault()
    const nuevoProducto = {
      nombre: nombreProducto,
      precio: precioProducto,
      fecha: fechaProducto,
      codigo: codigoProducto,
      descripcion: descripcionProducto,
      categoria: categoriaProducto,
      cantidad: cantidadProducto,
      imagen: imagenPrincipal
    }

    servicioProductos
      .crear(nuevoProducto)
      .then((respuesta)=>{
        console.log("producto subido con exito", respuesta)
        window.location.href = "/";
      })
      .catch((error)=>{
        console.log("error al subir el producto", error)
      })
  }

  return (
    <section className={styles.contenedor}>
        <h2>Subir Producto</h2>
        <div className={styles.contenedor_formulario}>
          <FormularioNuevoProducto 
            onSubmit={subirProducto}
            onChange={handleInputOnchange}
            nameNombre="nombre" valueNombre={nombreProducto}
            namePrecio="precio" valuePrecio={precioProducto}
            nameFecha="fecha" valueFecha={fechaProducto}
            nameCodigo="codigo" valueCodigo={codigoProducto}
            nameDescripcion="descripcion" valueDescripcion={descripcionProducto}
            nameCategoria="categoria" valueCategoria={categoriaProducto}
            nameCantidad="cantidad" valueCantidad={cantidadProducto}
            nameImagenPrincipal="imagenPrincipal" valueImagenPrincipal={imagenPrincipal}
            nameImangeDos="ImagenDos" valueImagenDos={imagenDos}
            nameImangeTres="ImagenTres" valueImagenTres={imagenTres}
            nameImangeCuatro="ImagenCuatro" valueImagenCuatro={imagenCuatro}
            nameImangeCinco="ImagenCinco" valueImagenCinco={imagenCinco}

          />
        </div>
    </section>
  )
}


export default NuevoProducto;
