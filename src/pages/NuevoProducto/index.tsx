import FormularioNuevoProducto from "../../components/FormularioNuevoProducto/FormularioNuevoProducto";
import styles from "./NuevoProducto.module.css";
import servicioProductos from "../../components/services/servicioProductos";
import { useForm } from "../../hooks/useForm";

function NuevoProducto() {

  const {handleChange, nombreProducto, precioProducto,fechaProducto,codigoProducto,descripcionProducto,categoriaProducto,cantidadProducto,imagenPrincipal,imagenDos,imagenTres,imagenCuatro,imagenCinco} = useForm({
    nombreProducto:"",
    precioProducto:"",
    fechaProducto:"",
    codigoProducto:"",
    descripcionProducto:"",
    categoriaProducto:"",
    cantidadProducto:"",
    imagenPrincipal:"",
    imagenDos:"",
    imagenTres:"",
    imagenCuatro:"",
    imagenCinco:"",
  })

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
            onChange={handleChange}
            nameNombre="nombreProducto" valueNombre={nombreProducto}
            namePrecio="precioProducto" valuePrecio={precioProducto}
            nameFecha="fechaProducto" valueFecha={fechaProducto}
            nameCodigo="codigoProducto" valueCodigo={codigoProducto}
            nameDescripcion="descripcionProducto" valueDescripcion={descripcionProducto}
            nameCategoria="categoriaProducto" valueCategoria={categoriaProducto}
            nameCantidad="cantidadProducto" valueCantidad={cantidadProducto}
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
