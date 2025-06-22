import { useEffect, useState } from "react"
import InputStock from "../FormularioStock/InputStock"
import InputCategoria from "../InputCategoria/InputCategoria"
import servicioProductos from "../../services/productos"
import styles from "./FormularioNuevoProducto.module.css"

const FormularioNuevoProducto = ({
    onSubmit, 
    onChange,
    nameNombre, valueNombre,
    namePrecio, valuePrecio,
    nameFecha, valueFecha,
    nameCodigo, valueCodigo,
    nameDescripcion, valueDescripcion,
    nameCategoria, valueCategoria,
    nameCantidad, valueCantidad,
    nameImagenPrincipal, valueImagenPrincipal,
    nameImangenDos, valueImagenDos,
    nameImangenTres, valueImagenTres,
    nameImangenCuatro, valueImagenCuatro,
    nameImagenCinco, valueImagenCinco
}) => {

  const [categorias, setCategorias] = useState([valueCategoria])
  
    useEffect(() =>{
    servicioProductos
    .obtener()
    .then(response =>{
        const categorias = [...new Set(response.map(producto => producto.categoria))];
        setCategorias(categorias);
    })
    },[])

  return (
    <form className={styles.formulario} onSubmit={onSubmit}>
      <InputStock 
        name={nameNombre}
        value={valueNombre}
        onChange={onChange}
        type="text"
        placeholder={nameNombre}
        clase="producto"
      />
      <InputStock 
        name={namePrecio}
        value={valuePrecio}
        onChange={onChange}
        type="number"
        placeholder={namePrecio}
        clase="producto"
      />
      <InputStock 
        name={nameFecha}
        value={valueFecha}
        onChange={onChange}
        type="date"
        clase="producto"
      />
      <InputStock 
        name={nameCodigo}
        value={valueCodigo}
        onChange={onChange}
        type="text"
        placeholder={nameCodigo}
        clase="producto"
      />
      <InputStock 
        name={nameDescripcion}
        value={valueDescripcion}
        onChange={onChange}
        type="text"
        placeholder={nameDescripcion}
        clase="producto"
      />
      <InputCategoria 
        name={nameCategoria}
        value={valueCategoria}
        handleChange={onChange} 
        categorias={categorias}
        clase="producto"
      />
      <InputStock 
        name={nameCantidad}
        value={valueCantidad}
        onChange={onChange}
        type="number"
        placeholder={nameCantidad}
        clase="producto"
      />
      <InputStock 
        name={nameImagenPrincipal}
        value={valueImagenPrincipal}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen principal"
      />
      <InputStock 
        name={nameImangenDos}
        value={valueImagenDos}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen"
      />
      <InputStock 
        name={nameImangenTres}
        value={valueImagenTres}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen"
      />
      <InputStock 
        name={nameImangenCuatro}
        value={valueImagenCuatro}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen"
      />
      <InputStock 
        name={nameImagenCinco}
        value={valueImagenCinco}
        onChange={onChange}
        type="file"
        clase="file"
        tipoImagen="Subir Imagen"
      />
      <button type="submit" className={styles.boton_formulario}>Enviar</button>
    </form>
  )
}

export default FormularioNuevoProducto