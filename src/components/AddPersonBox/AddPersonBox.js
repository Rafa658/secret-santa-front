import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AddPersonBox() {
    return (<div className='add-person-box'>
          <div className='add-person-container'>
            <TextField
              variant='outlined'
              label='Nome do participante'
              defaultValue='Nome'
              className='textfield'
              />
            <TextField
              variant='outlined'
              label='Email do participante'
              defaultValue='Email'
              className='textfield'
              />
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                  // fazer chamada axios
                }}
                >Adicionar</Button>
          </div>
        </div>)
}