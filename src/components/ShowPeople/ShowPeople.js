import '../../index.css'

import * as React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import axios from 'axios'

const handleDelete = (name) => {
    axios
        .delete('http://localhost:4000/delete_person', {data: {name: name}})
        .then((res) => {
            alert(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

const card = (person) => {
    return (
        <div
            className='person-card'
        >
            <CardContent>
                <Typography
                    variant='h5'
                    component='div'
                >
                    {person.name}
                </Typography>
                <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                >
                    {person.email}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size='small'
                    onClick={() => handleDelete(person.name)}
                >Remover</Button>
            </CardActions>
        </div>
    )
}

export default function People() {
    const [people, setPeople] = React.useState([])

    React.useEffect(() => {
        axios
            .get('http://localhost:4000/get_people')
            .then(res => {
                setPeople(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [people])

    return (
        <Box
            className = 'show-people'
        >
            {people.map((person, index) => {
                return (
                    <Card
                        variant='outlined'
                        className='show-person'
                        key={index}
                    >{card(person)}</Card>)

            })}
        </Box>
    )
}