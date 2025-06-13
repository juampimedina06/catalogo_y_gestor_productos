import { useState } from "react";
import FormularioNuevoProducto from "../../components/FormularioNuevoProducto/FormularioNuevoProducto";
import styles from "./NuevoProducto.module.css";

function NuevoProducto() {

  const [idProducto, setIdProducto] = useState("")
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
      case 'id':
        setIdProducto(value)
      break
      case 'nombre':
        setNombreProducto(value)
      break
      case 'precio':
        setPrecioProducto(value)
      break
    }

  }

  const subirProducto = (e) => {

  }

  return (
    <section className={styles.contenedor}>
        <h2>Subir Producto</h2>
        <div className={styles.contenedor_formulario}>
          <FormularioNuevoProducto 
            onSubmit={subirProducto}
            onChange={handleInputOnchange}
            nameId="id" valueCodigo={idProducto}
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
            nameImangeDos="ImagenCinco" valueImagenCinco={imagenCinco}

          />
        </div>
    </section>
  )
}


export default NuevoProducto;
