import React from 'react'
import { ImageList,ImageListItem } from '@mui/material';
import exerciseImg1 from '../assets/images/exer1.jpg'
import exerciseImg2 from '../assets/images/exer2.jpg'

const ImageCompo = () => {
  return (
    <ImageList sx={{ width: 500, height: 1050 }} cols={1} rowHeight={164}>
        <ImageListItem>
            <img src={exerciseImg1} alt='Exercsize Banner' />
            <img src={exerciseImg2} alt='Exercsize Banner' />
        </ImageListItem>
    </ImageList>
  )
}

export default ImageCompo