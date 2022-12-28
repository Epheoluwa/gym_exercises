import React, {useState} from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import ExerciseSearch from '../components/ExerciseSearch';
import Exercises from '../components/Exercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ExerciseSearch />
      <Exercises />

    </Box>
  )
}

export default Home