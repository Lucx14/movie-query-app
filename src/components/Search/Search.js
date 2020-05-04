import React, { useState } from 'react';
import styled from 'styled-components';

import axios from 'axios';

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
`;

const Search = (props) => {
  
  const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTA4MGQ5ZDYxZjMwMjQ2ZDg1NTFjNzBmNWUxZDg5YyIsInN1YiI6IjVlYWIyMWY3YTEyODU2MDAxZDY5MTkwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3e7I81YcbPKVb2lb63bEt8Uk0zpaxTZx_WxzNWdXvGo` }
  };

  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const searchHandler = (event) => {
    event.persist();
    console.log(`Event: ${event.target.value}`);
    let query = event.target.value.split(' ').join('+');
    console.log(`QueryParam: ${query}`);
    setSearchKey(event.target.value);
    if (query.length > 0) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=91080d9d61f30246d8551c70f5e1d89c&query=${query}` ,
      config
      )
        .then(res => {
          if (res.data.results.length > 0) {
            let newData = res.data.results.map(movie => {
              return { title: movie.original_title, id: movie.id }
            }).slice(0, 5);
            setSearchResults(newData);
          } else {
            setSearchResults([]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    console.log(searchResults);
  }

  let suggestions = searchResults.map((result, i) => {
    return <li key={i} data-id={result.id} onClick={props.grabMovieId.bind(this)}>{result.title}</li>
  });

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Search Movie Title..."
        onChange={searchHandler} 
        value={searchKey} 
      />
      <div>
        <ul>
          {suggestions}
        </ul>
      </div>
     
    </Wrapper>
  );
};

export default Search;