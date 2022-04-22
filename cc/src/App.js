import React from 'react';
import {
  ChakraProvider,
  Box,
  SimpleGrid,
  theme,
} from '@chakra-ui/react';
import Navigation from "./Components/Navigation.js"
import MovieCard from "./Components/MovieCard.js"


function App() {
  return (
    <ChakraProvider>
         <Navigation />
         <MovieCard />
    </ChakraProvider>
  );
}

export default App;
