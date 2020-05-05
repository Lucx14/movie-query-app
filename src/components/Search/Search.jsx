import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import axios from 'axios';

const Wrapper = styled.div`
  width: 100%;
  max-height: 2.5rem;
  z-index: 1;
`;

const Input = styled.input`
  width: 100%;
  background: none;
  border-bottom: solid white 1px;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 20px;
  margin-top: 40px;
  color: white;
  font-weight: 300;
`;

const Button = styled.button`
  width: 100%;
  border: 0;
  padding: 10px;
  background-color: black;
  opacity: 0.8;
  color: white;
  text-align: left;
  font-size: 1.2rem;
  font-family: 'Lato', sans-serif;
  outline: none;
  :hover {
    background-color: #00fc87;
    opacity: 0.9;
    color: black;
  }
`;

const SuggestionsWrapper = styled.div``;

const Search = (props) => {
  const { grabMovieId } = props;
  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTA4MGQ5ZDYxZjMwMjQ2ZDg1NTFjNzBmNWUxZDg5YyIsInN1YiI6IjVlYWIyMWY3YTEyODU2MDAxZDY5MTkwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3e7I81YcbPKVb2lb63bEt8Uk0zpaxTZx_WxzNWdXvGo`,
    },
  };

  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (event) => {
    event.persist();
    const query = event.target.value.split(' ').join('+');
    setSearchKey(event.target.value);
    if (query.length > 0) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=91080d9d61f30246d8551c70f5e1d89c&query=${query}`,
          config
        )
        .then((res) => {
          if (res.data.results.length > 0) {
            const newData = res.data.results
              .map((movie) => {
                return { title: movie.original_title, id: movie.id };
              })
              .slice(0, 5);
            setSearchResults(newData);
          } else {
            setSearchResults([]);
          }
        })
        .catch(() => {});
    } else {
      setSearchResults([]);
    }
  };

  const handleClick = (event) => {
    grabMovieId(event);
    setSearchResults([]);
    setSearchKey(event.target.name);
  };

  const suggestions = searchResults.map((result) => {
    return (
      <div key={result.id}>
        <Button
          type="button"
          data-id={result.id}
          onClick={handleClick}
          name={result.title}
        >
          {result.title}
        </Button>
      </div>
    );
  });

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search Movie Title..."
        onChange={searchHandler}
        value={searchKey}
      />
      {searchResults.length > 0 && (
        <SuggestionsWrapper>{suggestions}</SuggestionsWrapper>
      )}
    </Wrapper>
  );
};

Search.propTypes = {
  grabMovieId: PropTypes.func.isRequired,
};

export default Search;
