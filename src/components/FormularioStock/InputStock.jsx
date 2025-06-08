import styles from "./FormularioStock.module.css"

const InputStock = ({name, value, onChange}) => {
    return (
            <input
                className={styles.input}
                name={name}
                value={value}
                onChange={onChange}
            />
    )
}

export default InputStock