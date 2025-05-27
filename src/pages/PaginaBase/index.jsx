import Cabecera from '../../components/Cabecera/Cabecera'
import Container from '../../components/Container'
import { Outlet } from 'react-router-dom'
import Pie from '../../components/Pie/Pie'
import CabeceraSuperior from '../../components/CabeceraSuperior/CabeceraSuperior'
import styles from "./PaginaBase.module.css"

function PaginaBase() {
  return (
      <main className={styles.main}>
        <CabeceraSuperior />
        <Cabecera />
            <Container>
                <Outlet />
            </Container>
        <Pie className={styles.footer} />
    </main>
  )
}

export default PaginaBase