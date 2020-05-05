import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Stat from './Layout/Stat';

const Wrapper = styled.div`
  background-color: black;
  opacity: 0.9;
  color: white;
  padding: 20px;
  max-width: 60%;
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
  color: #00fc87;
  padding-bottom: 2px;
  font-size: 1.3rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
`;

const MovieCard = (props) => {
  // console.log(props);
  const {
    title,
    genres,
    producers,
    runningTime,
    score,
    boxOffice,
    releaseDate,
    tagline,
    overview,
  } = props;

  const nestedDataToString = (data) => {
    const nestedArray = [];

    if (data !== undefined) {
      data.forEach((item) => {
        nestedArray.push(item.name);
      });
    }
    return nestedArray.join(', ');
  };

  const formattedRunTime = `${runningTime} mins`;
  const formattedScore = `${score} / 10`;
  const formattedRevenue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(boxOffice);

  return (
    <Wrapper>
      <H1>{title}</H1>
      <div>
        <H3>{tagline}</H3>
        <P>{overview}</P>
      </div>
      <div>
        <H3>{nestedDataToString(genres)}</H3>
        <P>{nestedDataToString(producers)}</P>
      </div>
      <StatWrapper>
        <Stat heading="Original Release" data={releaseDate} />
        <Stat heading="Running time" data={formattedRunTime} />
      </StatWrapper>
      <StatWrapper>
        <Stat heading="Box Office" data={formattedRevenue} />
        <Stat heading="Vote Average" data={formattedScore} />
      </StatWrapper>
    </Wrapper>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  tagline: PropTypes.string,
  overview: PropTypes.string,
  producers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      logo_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      origin_country: PropTypes.string,
    })
  ),
  runningTime: PropTypes.number,
  score: PropTypes.number,
  boxOffice: PropTypes.number,
  releaseDate: PropTypes.string,
};

MovieCard.defaultProps = {
  title: '-',
  genres: [{ id: 1, name: '' }],
  overview: '',
  tagline: '-',
  producers: [
    {
      id: 1,
      logo_path: '',
      name: '',
      origin_country: '',
    },
  ],
  runningTime: 1,
  score: 1,
  boxOffice: 1,
  releaseDate: '-',
};

export default MovieCard;
