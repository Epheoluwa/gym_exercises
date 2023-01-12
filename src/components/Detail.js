import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/bodypart.jpg'
import TargetImage from '../assets/icons/target.jpg'
import EquipmentImage from '../assets/icons/equipment.jpg'

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail
    const extraDetails = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon:TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]
    return (
        <Stack
            gap='60px'
            sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
        >
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack
                sx={{ gap: { lg: '35px', xs: '20px' } }}
            >
                <Typography variant='h6'>
                    {name}
                </Typography>
                <Typography>
                    Exercisekeep your strong. {name} is one of the best exercise to to target your {target}. It will help you improve your mood and energy
                </Typography>
                {extraDetails.map((item)=>(
                    <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                        <Button
                            sx={{background:'#ff2bd', borderRadius:'50%', width:'100px', height:'100px' }}
                        >
                            <img src={item.icon} alt={bodyPart} style={{ width:'50px', height:'50px'}}/>
                        </Button>
                        <Typography textTransform='capitalize' variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

        </Stack>
    )
}

export default Detail