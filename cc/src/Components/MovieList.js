import React from 'react'
import {useState, useEffect } from "react";
import apiKey from "../Config";
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function MovieList() {

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
    {movies.map(movie =>(
        
        <div className="cardBox" key={uuidv4()}>
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} />
        <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
    ))}
    
    </>

  )
}

export default MovieList