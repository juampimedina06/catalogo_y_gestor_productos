import styles from "./BlancoNegroTogle.module.css"

export default function BlancoNegroTema() {
    const setModoOscuro = () =>{
        document.querySelector("html").setAttribute("data-theme", "dark")
        
    }
    const setModoClaro = () =>{
        document.querySelector("html").setAttribute("data-theme", "light")

    }
    const setModoSistema = () =>{
        document.querySelector("html").removeAttribute("data-theme")

    }

    const obtenerValor = (e) => {
        switch (e.target.value){
            case "oscuro":
                setModoOscuro()
            break;
            case "claro":
                setModoClaro()
            break;
            case "sistema":
                setModoSistema()
            break;
        }
    }

    return (
        <label className={styles.label}>
            <select className={styles.select} onChange={obtenerValor}>
                <option className={styles.option} value="sistema">💻</option>
                <option value="oscuro">🌑</option>
                <option value="claro">🌞</option>
            </select>
        </label>
        )

}