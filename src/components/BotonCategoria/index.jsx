import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./BotonCategoria.module.css"


const BotonCategoria = ({name,value,handleChange, categorias}) => {

  return (
    <div className={styles.contenedor_categorias}>
      <FormControl 
        fullWidth 
        size="small" 
        className={styles.categoria}
        sx={{
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'black', // borde negro cuando está enfocado
            },
          },
        }}
      >
        <InputLabel className={styles.input_categorias} id="demo-simple-select-label">Categorias</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label="Categoria"
          onChange={handleChange}
        >
          <MenuItem value=''>Todas</MenuItem>
          {categorias.map((categoria) => (
            <MenuItem value={categoria} key={categoria}>{categoria}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </div>
  )
}

export default BotonCategoria


