import InputStock from "./InputStock"
import styles from "./FormularioStock.module.css"

const FormularioStock = ({
    onSubmit, 
    onChange,
    nameCodigo,valueCodigo,
    nameNombre,valueNombre,
    nameCantidad,valueCantidad,
    nameCategoria, valueCategoria,
    namePrecio,valuePrecio
}) => {
  return (
    <form className={styles.formulario} action={onSubmit}>
      <InputStock
        name={nameCodigo}
        value={valueCodigo}
        onChange={onChange}
      />
      <InputStock 
        name={nameNombre}
        value={valueNombre}
        onChange={onChange}
      />
      <InputStock 
        name={nameCantidad}
        value={valueCantidad}
        onChange={onChange}
      />
      <InputStock 
        name={nameCategoria}
        value={valueCategoria}
        onChange={onChange}
      />
      <InputStock 
        name={namePrecio}
        value={valuePrecio}
        onChange={onChange}
      />
    </form>
  )
}

export default FormularioStock