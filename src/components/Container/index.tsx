import styles from "./Container.module.css"

interface PropsContainer{
  children:string;
}

const Container = ({children}:PropsContainer) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}

export default Container