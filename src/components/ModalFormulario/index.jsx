import { useEffect, useState } from 'react';
import styles from './ModalFormulario.module.css';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import DarkTextField from '../InputEstilizado';
import ModalMensaje from '../ModalReutilizable';

const categorias = [
    { value: 'pelicula', label: 'Pelicula' },
    { value: 'serie', label: 'Serie' },
];



const ModalFormulario = ({ isOpen, closeModal, id }) => {
    const [formData, setFormData] = useState({ titulo: '', año: '', categoria: '', imagen: '', trailer: '', descripcion: '' });
    const [modalVisible, setModalVisible] = useState(false);

    
    const actualizarVideo = async (formData) =>{
        const API_URL = `https://67bb984fed4861e07b37ce96.mockapi.io/videos/contenido/${id}`;
        try {
            const response = await fetch(API_URL, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Error al actualizar el video');
            setModalVisible(true);
            setTimeout(() => window.location.href = '/', 2000);
        } catch (error) {
            console.error('Error al actualizar el video:', error);
        }
    };

    useEffect(() => {
        if (!id) return; // Evita que se ejecute sin un ID válido
    
        const fetchVideo = async () => {
            try {
                const response = await fetch(`https://67bb984fed4861e07b37ce96.mockapi.io/videos/contenido/${id}`);
                if (!response.ok) throw new Error("Contenido no encontrado");
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error("Error al obtener el video:", error);
            }
        };
        fetchVideo();
    }, [id]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleClear = () => {
        setFormData({ titulo: '', año: '', categoria: '', imagen: '', trailer: '', descripcion: '' });
    };

    

    return isOpen ? (
        <div className={styles.contenedor_modal}>
            <div className={styles.modal}>
                <h2 className={styles.titulo}>Editar producto</h2>
                <form onSubmit={(e) => e.preventDefault()}
                
                className={styles.formulario}>
                    <DarkTextField
                        label="Titulo"
                        name="titulo"
                        value={formData.titulo}
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <DarkTextField
                        label="Año de estreno"
                        name="año"
                        value={formData.año}
                        variant="outlined"
                        type="number"
                        onChange={handleChange}
                    />
                    <DarkTextField
                        select
                        variant="outlined"
                        label="Categorías"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        style={{ textAlign: "left" }}
                    >
                        {categorias.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </DarkTextField>
                    <DarkTextField
                        label="Imagen"
                        name="imagen"
                        value={formData.imagen}
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <DarkTextField
                        label="Video"
                        name="trailer"
                        value={formData.trailer}
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <DarkTextField
                        label="Descripción"
                        name="descripcion"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={formData.descripcion}
                        onChange={handleChange}
                    />
                </form>
                <div className={styles.botones}>
                    <Button
                        variant="outlined"
                        style={{ borderColor: "#ffffff", color: "#ffffff", width: '120px' }}
                        className={styles.boton}
                        onClick={handleClear}
                    >
                        Limpiar
                    </Button>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#fff", color: "#121212", width: '120px' }}
                        type="submit"
                        className={styles.boton}
                        onClick={(e) => {
                            e.preventDefault();
                            actualizarVideo(formData);
                        }}
                    >
                        Actualizar
                    </Button>
                    <button 
                        onClick={closeModal}
                        style={{
                            border: "none", color: "#ffffff", position: 'absolute', right: '10px',
                            bottom: '1070%', left: "102%", backgroundColor: "#c50505", width: '30px',
                            height: '30px', borderRadius: '7px', cursor: 'pointer', display: 'flex',
                            justifyContent: 'center', alignItems: 'center'
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <ModalMensaje mensaje="Video actualizado correctamente" visible={modalVisible} onClose={() => setModalVisible(false)} />
        </div>
    ) : null;
};

export default ModalFormulario;
