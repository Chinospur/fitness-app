import React, {useState} from 'react';
import {Box} from "@mui/material";
import SearchExercises from '../components/SearchExercises';
import EXercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
const [exercises, setExercises] = useState([]);
const [bodyPart, setbodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises} 
      bodyPart={bodyPart} 
      setBodyPart={setbodyPart} />
      <EXercises 
      setExercises={setExercises}
      exercises={exercises} 
      bodyPart={bodyPart} />
    </Box>
  )
}

export default Home;