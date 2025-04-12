import { TextField } from "@mui/material";
import { borderRadius, styled } from "@mui/system";

// Estilo personalizado para TextField 
const DarkTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#ffffff", // Fondo blanco
    color: "#000000bc", // Texto rojo oscuro
    "& fieldset": {
      borderColor: "#a3a3a3ba", // Borde rojo oscuro
      borderRadius:"4px",
    },
    "&:hover fieldset": {
      borderColor: "#00000022", // Borde rojo oscuro al hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#aaaaaa39", // Borde rojo brillante al enfocar
    },
  },
  "& .MuiInputLabel-root": {
    color: "#414141bd", // Label rojo oscuro
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#414141bd", // Blanco al enfocar
  },
  "& .MuiFormHelperText-root": {
    marginBottom: 0, // Eliminar margen inferior
    paddingBottom: 0, // Asegurarse de que no haya padding en la parte inferior
    marginTop: 0, // Asegurarse de que no haya margen superior
    paddingTop: 0, // Asegurarse de que no haya padding en la parte superior
    fontSize: "0.875rem", // Tamaño del texto
    color: "#F44336", // Rojo brillante para el error
    fontWeight: "400", // Peso de la fuente para el texto de error
  },
});

export default DarkTextField;
