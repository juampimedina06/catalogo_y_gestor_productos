import React, { useEffect, useState } from 'react';
import styles from "./Player.module.css";
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Player = () => {
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const parametros = useParams();

  useEffect(() => {  
    const fetchVideo = async () => {
      try {
        const response = await fetch(`https://67bb984fed4861e07b37ce96.mockapi.io/videos/contenido/${parametros.id}`);
        if (!response.ok) throw new Error("Contenido no encontrado");
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error al obtener el video:", error);
        setFormData(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchVideo();
  }, [parametros.id]);

  if (isLoading) return <div className={styles.loader}>
    <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
  </div>;
  if (!formData) return <NotFound />;
  return (
    <div className={styles.contenedor}>
      <section className={styles.container}>
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${extraerIDYoutube(formData.trailer)}`} 
          title={formData.titulo} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"     
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
        <div className={styles.contenedor_datos}>
          <img className={styles.imagen} src={formData.imagen} alt="" />
          <div className={styles.informacion_pelicula}>
            <div className={styles.titulo_año}>
              <h1 className={styles.titulo}>{formData.titulo}</h1>
              <p className={styles.año}>({formData.año})</p>
            </div>
            <div className={styles.contenedor_categoria}>
              <p className={styles.categoria}>Categoría <span className={styles.span}>{formData.categoria}</span></p>
            </div>
            <div className={styles.contenedor_descripcion}>
              <p className={styles.descripcion}>{formData.descripcion}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const extraerIDYoutube = (url) => {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

export default Player;
