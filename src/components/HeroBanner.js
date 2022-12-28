import React from 'react'
import { Box,Typography, Button } from '@mui/material'
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px', xs:'70px'},
        ml:{sm:'50px'}
    }} position="relative" p="20px">
        <Typography color="#1B4D3E" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} 
            sx={{
                fontSize:{lg:"44px", xs:'40px'}
            }}
            mb="23px" mt="30px"
        >
            Sweat, Smiles <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={2}>
            Check out the most effective exercises
        </Typography>
        <Button variant="contained"
            sx={{
                backgroundColor: '#1B4D3E', borderColor: '#1B4D3E'
            }} href="#exercises"
        >Explore Exercises</Button>
        <Typography fontWeight={600} color="#1B4D3E"
            sx={{
                opacity: 0.1,
                display:{lg:"block", xs:"none"}
            }}
            fontSize="200px"
        >
            Exercise
        </Typography>
        <img src={HeroBannerImg} alt="Banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner