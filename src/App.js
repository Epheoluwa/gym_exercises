import React from 'react'
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';
import Footer from './components/Footer';
import AllExercises from './Pages/AllExercises';
const App = () => {
  return (
    <Box width="400px" sx={{ width:{xl:'1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetails />} />
            <Route path="/exercise" element={<AllExercises />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App