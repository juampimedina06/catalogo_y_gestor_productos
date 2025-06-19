import styles from "./BlancoNegroTogle.module.css"
import { useEffect, useState } from "react"
export default function BlancoNegroTema() {
    const [modo, setModo] = useState("sistema")

    useEffect(() => {
        const temaGuardado = localStorage.getItem("html")
        if (temaGuardado === "dark") {
            setModoOscuro()
            setModo("oscuro")
        } else if (temaGuardado === "light") {
            setModoClaro()
            setModo("claro")
        } else {
            setModoSistema()
            setModo("sistema")
        }
    }, [])

    const setModoOscuro = () => {
        document.querySelector("html").setAttribute("data-theme", "dark")
    }

    const setModoClaro = () => {
        document.querySelector("html").setAttribute("data-theme", "light")
    }

    const setModoSistema = () => {
        document.querySelector("html").removeAttribute("data-theme")
    }

    const obtenerValor = (e) => {
        const valor = e.target.value
        setModo(valor)

        switch (valor) {
            case "oscuro":
                setModoOscuro()
                localStorage.setItem("html", "dark")
                break
            case "claro":
                setModoClaro()
                localStorage.setItem("html", "light")
                break
            case "sistema":
                setModoSistema()
                localStorage.removeItem("html")
                break
        }
    }

    return (
        <label className={styles.label}>
            <select className={styles.select} value={modo} onChange={obtenerValor}>
                <option className={styles.option} value="sistema">💻</option>
                <option value="oscuro">🌑</option>
                <option value="claro">🌞</option>
            </select>
        </label>
    )
}
