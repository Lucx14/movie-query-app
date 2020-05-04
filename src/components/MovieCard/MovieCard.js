import React from 'react';
import styled from 'styled-components';

import Stat from './Layout/Stat';

const Wrapper = styled.div`
  background-color: black;
  opacity: 0.9;
  color: white;
  padding: 20px;
  flex-grow: 1;
`;

const StatWrapper = styled.div`
  display: flex;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
`;

const P = styled.p`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
`;

const H3 = styled.h3`
  color: #00FC87;
  padding-bottom: 2px;
  font-size: 1.3rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
`;

const MovieCard = (props) => {
  const { title, genres, producers, runningTime, score, boxOffice } = props;

  const nestedDataToString = (data) => {
    let nestedArray = [];
    let resultString;

    if(data !== undefined) {
      data.forEach(item => {
        nestedArray.push(item.name);
      });
    }
    resultString = nestedArray.join(', ');
    return resultString;
  }

  const formattedRunTime = `${runningTime} mins`;
  const formattedScore = `${score} / 10`;
  const formattedRevenue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(boxOffice);

  return (
    <Wrapper>
      <H1>{title}</H1>
      <div>
        <H3>{props.tagline}</H3>
        <P>{props.overview}</P>
      </div>
      <div>
        <H3>{nestedDataToString(genres)}</H3>
        <P>{nestedDataToString(producers)}</P>
      </div>
      <StatWrapper>
        <Stat heading="Original Release" data={props.releaseDate} />
        <Stat heading="Running time" data={formattedRunTime} />
      </StatWrapper>
      <StatWrapper>
        <Stat heading="Box Office" data={formattedRevenue} />
        <Stat heading="Vote Average" data={formattedScore} />
      </StatWrapper>
    </Wrapper>
  );
};

export default MovieCard;
