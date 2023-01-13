import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0'}}} >
        <Typography variant='h4' mb={5}>Exercise that target the same <span style={{ color: '#1B4D3E', textTransform: 'capitalize' }}>muscle</span>  group</Typography>
        <Stack direction='row' sx={{p:'2', position:'relative'}}>
            {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
        </Stack>
        <Typography variant='h4' mb={5} mt={5}>Exercise that use the same <span style={{ color: '#1B4D3E', textTransform: 'capitalize' }}>equipment</span> </Typography>
        <Stack direction='row' sx={{p:'2', position:'relative'}}>
            {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
        </Stack>
    </Box>
  )
}

export default SimilarExercises