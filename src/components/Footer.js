import React from 'react'
import { Stack, Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#ECFFDC'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
          <Typography variant='h5' pb='40px' mt='20px'> 
            Design by Solomon Sunmola
          </Typography>
      </Stack>
    </Box>
  )
}

export default Footer