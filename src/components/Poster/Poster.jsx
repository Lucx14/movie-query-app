import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  max-width: 40%;
`;

const Image = styled.img`
  border-radius: 3px 0px 0px 3px;
  max-width: 100%;
  height: auto;
`;

const Poster = (props) => {
  const { image } = props;
  let posterLocation;
  if (image === undefined) {
    posterLocation = '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg';
  } else {
    posterLocation = image;
  }

  return (
    <Wrapper>
      <Image
        src={`https://image.tmdb.org/t/p/original${posterLocation}`}
        alt="Poster"
      />
    </Wrapper>
  );
};

Poster.propTypes = {
  image: PropTypes.string,
};

Poster.defaultProps = {
  image: undefined,
};

export default Poster;
