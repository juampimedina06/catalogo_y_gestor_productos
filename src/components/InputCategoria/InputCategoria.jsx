import styles from "./inputCategoria.module.css"

const InputCategoria = ({name, value, handleChange, categorias}) => {
    return (
        <select 
        name={name}
        value={value}
        onChange={handleChange}
        className={styles.select}
        >
        {categorias.map((categoria) => (
            <option value={categoria} key={categoria}>{categoria}</option>
        ))}
        
        </select>
        )
}

export default InputCategoria