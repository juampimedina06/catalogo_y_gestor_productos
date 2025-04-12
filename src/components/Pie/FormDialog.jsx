import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;

    if (email) {
      console.log("Correo suscrito:", email);
      handleClose();
    } else {
      console.log("Ingrese un correo válido");
    }
  };

  return (
    <React.Fragment>
      <Button
        sx={{ color: '#fff', borderColor: '#fff' }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        click para resibir novedades
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle
            sx={{
              backgroundColor: '#fff',
              color: 'rgb(68, 2, 2)',
              fontWeight: 'bold',
            }}
          >
            Suscripción
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: 'rgb(68, 2, 2)', padding: 3}}>
            <DialogContentText sx={{ color: '#fff', marginBottom: 2, marginTop: 2 }}>
              Para suscribirse a este sitio web, introduzca aquí su dirección de correo electrónico.
              Nosotros le enviaremos actualizaciones por mail sobre el local.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Correo electrónico"
              type="email"
              fullWidth
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                '& label.Mui-focused': { color: 'rgb(68, 2, 2)' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#fff' },
                  '&:hover fieldset': { borderColor: '#fff' },
                  '&.Mui-focused fieldset': { borderColor: 'rgb(68, 2, 2)' },
                },
              }}
            />
          </DialogContent>
          <DialogActions sx={{ backgroundColor: 'rgb(68, 2, 2)', padding: 2 }}>
            <Button onClick={handleClose} sx={{ color: '#fff', borderColor: '#fff' }}>
              Cancelar
            </Button>
            <Button
              type="submit"
              sx={{
                color: 'rgb(68, 2, 2)',
                border: '1px solid #fff',
                backgroundColor: '#fff',
                '&:hover': { backgroundColor: '#ffebef' },
              }}
            >
              Suscribirse
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
