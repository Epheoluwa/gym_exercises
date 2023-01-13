import React, { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import ExerciseSearch from '../components/ExerciseSearch';



const AllExercises = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])

    return (
        <Box>
            <ExerciseSearch setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} type='All Exercises' />
        </Box>
    )
}

export default AllExercises