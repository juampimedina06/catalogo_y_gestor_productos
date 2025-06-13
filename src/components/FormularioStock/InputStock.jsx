import styles from "./FormularioStock.module.css"

const InputStock = ({name, value, onChange, type}) => {
    return (
            <input
                className={styles.input}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
            />
    )
}

export default InputStock