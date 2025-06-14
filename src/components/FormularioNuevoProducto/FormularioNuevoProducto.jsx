import { useEffect, useState } from "react"
import InputStock from "../FormularioStock/InputStock"
import InputCategoria from "../InputCategoria/InputCategoria"
import servicioProductos from "../services/servicioProductos"
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
      />
      <InputStock 
        name={namePrecio}
        value={valuePrecio}
        onChange={onChange}
        type="number"
      />
      <InputStock 
        name={nameFecha}
        value={valueFecha}
        onChange={onChange}
        type="date"
      />
      <InputStock 
        name={nameCodigo}
        value={valueCodigo}
        onChange={onChange}
        type="text"
      />
      <InputStock 
        name={nameDescripcion}
        value={valueDescripcion}
        onChange={onChange}
        type="text"
      />
      <InputCategoria 
        name={nameCategoria}
        value={valueCategoria}
        handleChange={onChange} 
        categorias={categorias}
      />
      <InputStock 
        name={nameCantidad}
        value={valueCantidad}
        onChange={onChange}
        type="number"
      />
      <InputStock 
        name={nameImagenPrincipal}
        value={valueImagenPrincipal}
        onChange={onChange}
        type="image"
      />
      <InputStock 
        name={nameImangenDos}
        value={valueImagenDos}
        onChange={onChange}
        type="image"
      />
      <InputStock 
        name={nameImangenTres}
        value={valueImagenTres}
        onChange={onChange}
        type="image"
      />
      <InputStock 
        name={nameImangenCuatro}
        value={valueImagenCuatro}
        onChange={onChange}
        type="image"
      />
      <InputStock 
        name={nameImagenCinco}
        value={valueImagenCinco}
        onChange={onChange}
        type="image"
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormularioNuevoProducto