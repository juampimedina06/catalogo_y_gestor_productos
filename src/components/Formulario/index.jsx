import { useState } from "react";
import Button from "@mui/material/Button";
import styles from "./Formulario.module.css";
import MenuItem from '@mui/material/MenuItem';
import DarkTextField from "../InputEstilizado";

async function subirProducto(nombre,codigo,categoria,descripcion,imagen,cantidad,id,fecha,precio, setModalVisible) {
  
  const API_URL = "https://67c6be3c351c081993fe9984.mockapi.io/productos/producto";

  const productoData = {
    nombre,
    codigo,
    categoria,
    descripcion,
    imagen,
    cantidad,
    id,
    fecha,
    precio
  };

  try {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productoData),
    });

    if (!respuesta.ok) {
      console.error(`Error en la subida: ${respuesta.status} ${respuesta.statusText}`);
    }

    const data = await respuesta.json();
    setModalVisible(true);
    setTimeout(() => window.location.href = '/', 2000);

    return data;
  } catch (error) {
    console.error("Error al subir el video:", error);
    return null;
  }
}

const categorias = [
  { value: 'pelicula', label: 'Pelicula' },
  { value: 'serie', label: 'Serie' },
];

const Formulario = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [año, setAño] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [errors, setErrors] = useState({
    title: { error: false, message: "El título es obligatorio" },
    año: { error: false, message: "Debe introducir el año de estreno" },
    category: { error: false, message: "Porvafor eliga una categoria" },
    image: { error: false, message: "El enlace de la imagen es necesaria crack" },
    video: { error: false, message: "Introduzca un enlace" },
    description: { error: false, message: "La descripción es obligatoria" },
  });

  const validarCampo = (campo, valor) => {
    return valor.trim() === ""
      ? { [campo]: { error: true, message: errors[campo].message } }
      : { [campo]: { error: false, message: "" } };
  };

  const handleBlur = (campo, valor) => {
    setErrors((prev) => ({ ...prev, ...validarCampo(campo, valor) }));
  };

  const isFormValid = () => {
    const nuevosErrores = {
      title: validarCampo("title", title).title,
      año:validarCampo("año",año).año,
      category: validarCampo("category", category).category,
      image: validarCampo("image", image).image,
      video: validarCampo("video", video).video,
      description: validarCampo("description", description).description,
    };
    setErrors(nuevosErrores);

    return !Object.values(nuevosErrores).some((campo) => campo.error);
  };

  const handleClear = () => {
    setTitle("");
    setAño("");
    setCategory("");
    setImage("");
    setVideo("");
    setDescription("");
    setErrors({
      title: { error: false, message: "" },
      año: {error: false, message: ""},
      category: { error: false, message: "" },
      image: { error: false, message: "" },
      video: { error: false, message: "" },
      description: { error: false, message: "" },
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (isFormValid()) {
            console.log(title, category, image, video, description)
          handleSubmit({ title, category, image, video, description });
        }
      }}
    >
      <div className={styles.contenedor_form}>
        <DarkTextField
          id="titulo"
          label="Título"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          error={errors.title.error}
          helperText={errors.title.error ? errors.title.message : ""}
          onBlur={(e) => handleBlur("title", e.target.value)}
        />

<DarkTextField
          id="year"
          label="Año de estreno"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => setAño(e.target.value)}
          value={año}
          error={errors.año.error}
          helperText={errors.año.error ? errors.año.message : ""}
          onBlur={(e) => handleBlur("año", e.target.value)}
          type="number"
          
        />
          <DarkTextField
            id="categoria"
            select
            label="Categorías"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            error={errors.category.error}
            helperText={errors.category.error ? errors.category.message : ""}
            fullWidth
            margin="normal"
            onBlur={(e) => handleBlur("category", e.target.value)}
            style={{ textAlign: "left" }}
          >
            {categorias.map((option) => (
              <MenuItem  key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </DarkTextField>
        
      </div>

      <div className={styles.contenedor_form}>
        <DarkTextField
          id="imagen"
          label="Imagen"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          error={errors.image.error}
          helperText={errors.image.error ? errors.image.message : ""}
          onBlur={(e) => handleBlur("image", e.target.value)}
        />

        <DarkTextField
          id="video"
          label="Video"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setVideo(e.target.value)}
          value={video}
          error={errors.video.error}
          helperText={errors.video.error ? errors.video.message : ""}
          onBlur={(e) => handleBlur("video", e.target.value)}
        />
      </div>

      <DarkTextField
        id="descripcion"
        label="Descripción"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        error={errors.description.error}
        helperText={errors.description.error ? errors.description.message : ""}
        onBlur={(e) => handleBlur("description", e.target.value)}
      />

      <div className={styles.botones}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#fff", color: "#121212" }}
          type="submit"
          className={styles.boton}
          onClick={(e) => {
            e.preventDefault();
            if (isFormValid()) {
              subirVideo(title, año, category, image, video, description, setModalVisible);
            }
          }}
        >
          Subir
        </Button>
        <Button
          variant="outlined"
          style={{ borderColor: "#000000", color: "#000000" }}
          className={styles.boton}
          onClick={(e)=> {
            handleClear();
          }}
        >
          Limpiar
        </Button>
      </div>
    </form>
    
  );
};

export default Formulario

