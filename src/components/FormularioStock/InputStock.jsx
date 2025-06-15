import { useState } from "react";
import styles from "./FormularioStock.module.css";

const InputStock = ({ name, value, onChange, type, placeholder, clase, tipoImagen }) => {
  const [nombreArchivo, setNombreArchivo] = useState("Ningún archivo seleccionado");

  if (clase === "file") {
    const handleArchivo = (e) => {
      onChange(e);
      setNombreArchivo(e.target.files[0]?.name || "Ningún archivo seleccionado");
    };

    return (
      <div className={styles.contenedor_file}>
        <input
          type="file"
          id={name}
          name={name}
          className={styles.input_file}
          onChange={handleArchivo}
        />
        <label htmlFor={name} className={styles.botonArchivo}>
          {tipoImagen}
        </label>
        <span className={styles.nombreArchivo}>{nombreArchivo}</span>
      </div>
    );
  }

  
  return (
    <input
      className={styles[`input_${clase}`]}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputStock;
