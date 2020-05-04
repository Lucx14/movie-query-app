import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';

import axios from 'axios';

import MovieCard from './components/MovieCard/MovieCard';
import Search from './components/Search/Search';
import Logo from './components/Logo/Logo';
import Poster from './components/Poster/Poster';

const Wrapper = styled.div.attrs(props => ({
  backdrop: props.backdrop ? `https://image.tmdb.org/t/p/original${props.backdrop}` : 'https://image.tmdb.org/t/p/original/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg'
}))`
  background: ${props => `url(${props.backdrop}) no-repeat center center fixed`};
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 10px 0;
  height: 100%;
  border: 1px solid white;
`;
const Footer = styled.div`
  border: solid 1px white;
  width: 80%;
  text-align: center;
  color: white;
`;
const TopContainer = styled.div`
  display: flex;
  width: 80%;
`;

const initialState = { id: 157336 };

function App() {
  const [movie, setMovie] = useState(initialState);

  const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTA4MGQ5ZDYxZjMwMjQ2ZDg1NTFjNzBmNWUxZDg5YyIsInN1YiI6IjVlYWIyMWY3YTEyODU2MDAxZDY5MTkwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3e7I81YcbPKVb2lb63bEt8Uk0zpaxTZx_WxzNWdXvGo` }
  };


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`,
    config
    )
      .then(res => {
        setMovie({
          id: res.data.id,
          title: res.data.original_title,
          overview: res.data.overview,
          tagline: res.data.tagline,
          genres: res.data.genres,
          producers: res.data.production_companies,
          releaseDate: res.data.release_date,
          runningTime: res.data.runtime,
          boxOffice: res.data.revenue,
          score: res.data.vote_average,
          backdrop: res.data.backdrop_path,
          poster: res.data.poster_path
        })
      })
      .catch(err => {
        console.log(err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie.id]);

  const movieChangeHandler = (event) => {
    console.log(event.target.dataset.id);
    setMovie({ id: event.target.dataset.id });
  };

  return (
    <Wrapper backdrop={movie.backdrop}>

      <TopContainer>
        <Logo />
        <Search grabMovieId={movieChangeHandler} />
      </TopContainer>

      <Card>
        <Poster image={movie.poster}/>
        <MovieCard
          title={movie.title}
          overview={movie.overview}
          tagline={movie.tagline}
          genre={movie.genres}
          producers={movie.producers}
          releaseDate={movie.releaseDate}
          runningTime={movie.runningTime}
          boxOffice={movie.boxOffice}
          score={movie.score}
        />
      </Card>
      
      <Footer>
        <p>Designed & developed by Lucien Najev</p>
        <p>View Code</p>
      </Footer>
    </Wrapper>
  );
}

export default App;
