import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import styles from "./index.module.css";
import Titulo from '../../components/Titulo';
import Producto from '../../components/Producto/Producto';
import CirculoCargar from '../../components/CirculoCargar/CirculoCargar';


const Inicio = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch("https://67c6be3c351c081993fe9984.mockapi.io/productos/producto")
    .then (response => response.json())
    .then (data =>{
      setProducto(data)
      setLoading(false)
    })
  }, []);


  if (loading){
    return <CirculoCargar />
  }
  return (
    <>
      <Banner />
      <section className={styles.contenedor_buscador}>
        
      </section>
      <section className={styles.contenedor_producto}>
        <Titulo titulo="Categorio del producto" />
        <div className={styles.producto}>
            {producto.map((producto) => {
              return <Producto {...producto} key={producto.id} />
            })}
        </div>
        
      </section>
    </>
  );
};

export default Inicio;
