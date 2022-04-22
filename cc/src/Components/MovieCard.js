import {useState, useEffect } from "react";
import apiKey from "../Config";
import { v4 as uuidv4 } from 'uuid';
import { Box, Image, Badge, StarIcon } from '@chakra-ui/react'

function MovieCard() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key='+ apiKey.movieKey)
         .then((data) => data.json())
         .then(data => {
            setMovies(data.results)
         })
       }, []);
       console.log(movies)
  return (
    <>
     {movies.map(movie => (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} alt="Movie Picture" />
        <Box p='6'>
        <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
                {movie.release_date}
            </Badge>
            <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
            >
            {movie.vote_average} Vote * &bull; {movie.original_language} Original Language
            </Box>
        </Box>

        <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
        >
            {movie.title}
        </Box>

        <Box>
            {movie.overview}
            <Box as='span' color='gray.600' fontSize='sm'>
            / wk
            </Box>
        </Box>
        </Box>
        </Box>

     ))}
 
    </>
   
 
  )
}

export default MovieCard