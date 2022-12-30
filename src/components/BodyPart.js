import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym2.jpg'
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        < Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #1B4D3E' : '',
                backgroundColor: '#fff',
                borderButtomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={()=>{
                setBodyPart(item)
                window.scrollTo({top:1800, left:100, behavior:'smooth'})
            }}
        >
            <img src={Icon} alt='dumbbell' style={{ width: '40px', height: '40px' }} />
            <Typography fontSize='20px' fontWeight='bold' textTransform='capitalize'>{item}</Typography>
        </Stack>
    )
}

export default BodyPart