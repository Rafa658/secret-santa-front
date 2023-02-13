import * as React from 'react'
import { Button } from '@mui/material'
import axios from 'axios'

const GenerateDraw = () => {
    const handleDraw = () => {
        axios
            .get('http://localhost:4000/draw')
            .then(res => console.log(res.data))
            .catch(e => console.log(e))
    }

    return(
        <Button
            variant='outlined'
            onClick={handleDraw}
            className='draw-button'
        >
            Sortear
        </Button>
    )
}

export default GenerateDraw