import React, { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'


const AllExercises = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])

    return (
        <Box>
            <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} type='All Exercises' />
        </Box>
    )
}

export default AllExercises