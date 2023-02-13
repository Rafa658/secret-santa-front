import * as React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import DataContext from '../Context/context';

const AddPersonContainer = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const {setCall} = React.useContext(DataContext)

  const handleNameChange = event => setName(event.target.value)
  const handleEmailChange = event => setEmail(event.target.value)
  const handleAdd = (name, email) => {
    axios
      .post('http://localhost:4000/add_person', {name: name, email: email})
      .then(res => {
        alert(res.data)
        setCall(c => !c)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  return (
    <>
      <div className='add-person-container'>
        <TextField
          variant='outlined'
          label='Nome do participante'
          defaultValue='Nome'
          className='textfield'
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          variant='outlined'
          label='Email do participante'
          defaultValue='Email'
          className='textfield'
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => handleAdd(name, email)}
        >Adicionar</Button>
      </div>
    </>
  )
}

export default function AddPersonBox() {

  return (<div className='add-person-box'>
    <AddPersonContainer/>
  </div>)
}