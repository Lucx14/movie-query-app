import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: solid 1px white;
  /* width: 100%;
  height: 100%; */
  width: 50%;
  background-color: black;
  color: white;
  padding: 20px;
  flex-grow: 1;
`;

const MovieCard = (props) => {
  const { title, genres, producers } = props;

  const nestedDataToString = (data) => {
    let nestedArray = [];
    let resultString;

    if(data !== undefined) {
      data.forEach(item => {
        nestedArray.push(item.name);
      });
    }
    resultString = nestedArray.join(', ');
    // return data.map(genre => genre.name).join(', ');
    return resultString;
  }


  return (
    <Wrapper>
      <h1>{title}</h1>

      <div>
        <h3>{props.tagline}</h3>
        <p>{props.overview}</p>
      </div>

      <div>
        <h3>{nestedDataToString(genres)}</h3>
        <p>{nestedDataToString(producers)}</p>
      </div>

      <div>
        <p>Original Release:</p>
        <p>{props.releaseDate}</p>
        <p>Running Time</p>
        <p>{props.runningTime}</p>
      </div>

      <div>
        <p>Box Office:</p>
        <p>{props.boxOffice}</p>
        <p>Vote Average:</p>
        <p>{props.score}</p>
      </div>


    </Wrapper>
  );
};


export default MovieCard;
