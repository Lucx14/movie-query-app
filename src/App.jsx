import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';

import axios from 'axios';

import MovieCard from './components/MovieCard/MovieCard';
import Search from './components/Search/Search';
import Logo from './components/Logo/Logo';
import Poster from './components/Poster/Poster';

const Wrapper = styled.div.attrs((props) => ({
  backdrop: props.backdrop
    ? `https://image.tmdb.org/t/p/original${props.backdrop}`
    : 'https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
}))`
  background: ${(props) =>
    `url(${props.backdrop}) no-repeat center center fixed`};
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Lato;
  min-height: 100vh;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  width: 80%;
  margin: 10px 0;
`;
const Footer = styled.div`
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
  width: 100%;
  text-align: center;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  padding: 20px 0;
`;
const TopContainer = styled.div`
  display: flex;
  width: 75%;
`;

const initialState = { id: 157336 };

function App() {
  const [movie, setMovie] = useState(initialState);

  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTA4MGQ5ZDYxZjMwMjQ2ZDg1NTFjNzBmNWUxZDg5YyIsInN1YiI6IjVlYWIyMWY3YTEyODU2MDAxZDY5MTkwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3e7I81YcbPKVb2lb63bEt8Uk0zpaxTZx_WxzNWdXvGo`,
    },
  };

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie.id}`, config)
      .then((res) => {
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
          poster: res.data.poster_path,
        });
      })
      .catch(() => {
        // console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie.id]);

  const movieChangeHandler = (event) => {
    setMovie({ id: event.target.dataset.id });
  };

  return (
    <Wrapper backdrop={movie.backdrop}>
      <TopContainer>
        <Logo />
        <Search grabMovieId={movieChangeHandler} />
      </TopContainer>
      <Card>
        <Poster image={movie.poster} />
        <MovieCard
          title={movie.title}
          overview={movie.overview}
          tagline={movie.tagline}
          genres={movie.genres}
          producers={movie.producers}
          releaseDate={movie.releaseDate}
          runningTime={movie.runningTime}
          boxOffice={movie.boxOffice}
          score={movie.score}
        />
      </Card>
      <Footer>
        <p>View Code</p>
        <p>Powered by THE MOVIE DB</p>
      </Footer>
    </Wrapper>
  );
}

export default App;
