import { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import styles from "./index.module.css";
import Titulo from '../../components/Titulo';
import Producto from '../../components/Producto/Producto';
import CirculoCargar from '../../components/CirculoCargar/CirculoCargar';
import BarraBusqueda from '../../components/BarraBusqueda/BarraBusqueda';
import ElementoNoEncontrado from '../../components/ElementoNoEncontrado/ElementoNoEncontrado';
import BotonCategoria from '../../components/BotonCategoria';
import { Link } from 'react-router-dom';
import servicioProducto from "../../services/productos"

const Inicio = () => {
  const [producto, setProducto] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true)
  const [filtrador, setFiltrador] = useState('')
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() => {
    servicioProducto
    .obtener()
    .then (response =>{
      setProducto(response)
      setLoading(false)
      const categoriasUnicas = [...new Set(response.map(producto => producto.categoria))];
      setCategorias(categoriasUnicas);
    })
  }, []);

  const filtrarProductos = producto.filter(producto => 
    producto.nombre.toLowerCase().includes(filtrador.toLowerCase()) &&
    (categoriaSeleccionada === '' || producto.categoria === categoriaSeleccionada)
  );

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    if(name === 'filtrarProducto'){
      setFiltrador(value)
    }else if(name === 'categoria'){
      setCategoriaSeleccionada(value)
    }
  }

  if (loading){
    return <CirculoCargar />
  }
  return (
    <>
      <Banner />
      <section className={styles.contenedor_buscador}>
        <div className={styles.contenedor_titulo}>
          <Titulo titulo="¡Oportunidades unicas!" />
        </div>
        <div className={styles.contenedor_buscadores}>
        <BarraBusqueda 
          placeholder="Buscar producto"
          name="filtrarProducto"
          value={filtrador}
          onChange={handleInputChange}
        />
        <BotonCategoria 
          name="categoria"
          value={categoriaSeleccionada}
          handleChange={handleInputChange}
          categorias={categorias}
        />
        </div>
      </section>
      <section className={styles.contenedor_producto}>
        {categoriaSeleccionada.length == 0 ? (
          <></>
        ):(
            <Titulo titulo={categoriaSeleccionada} />
        )}
        <div className={styles.producto}>
      {filtrarProductos.length == 0 ? ( 
        <ElementoNoEncontrado tipoDato="Nombre"/>
        
      ):(
        filtrarProductos.map((producto) => {  
          return <>
          <Link to={`producto/${producto.id}`}> 
            <Producto {...producto} key={producto.id} /> 
          </Link>
        </>
        })
      )} 
        </div>
      </section>
    </>
  );
};

export default Inicio;
