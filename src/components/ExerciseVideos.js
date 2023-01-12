import React from 'react'
import { Stack, Typography, Box } from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box 
        sx={{marginTop:{lg:'200px', xs:'20px'}}}
        p="20px"
    >
        <Typography variant='h4' mb='33px'>
            Watch <span style={{color:'#1B4D3E'}}>{name}</span> exercise Videos
        </Typography>
    </Box>
  )
}

export default ExerciseVideos