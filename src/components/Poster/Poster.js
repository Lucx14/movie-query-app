import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Image = styled.img`
  flex: 1;
  align-self: 'stretch';
`;

const Poster = (props) => {
  let posterLocation;
  if (props.image === undefined) {
    posterLocation = '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg';
  } else {
    posterLocation = props.image;
  };

  return (
    <Wrapper>
      <Image src={`https://image.tmdb.org/t/p/w500${posterLocation}`} alt="Poster" />
    </Wrapper>
  );
};

export default Poster;