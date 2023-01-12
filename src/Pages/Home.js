import React, { useState } from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ExerciseSearch from '../components/ExerciseSearch';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner />
      <ExerciseSearch setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} type='Showing Results' />

    </Box>
  )
}

export default Home