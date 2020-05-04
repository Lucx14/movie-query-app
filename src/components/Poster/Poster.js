import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Image = styled.img`
  flex-grow: 1;
  border-radius: 3px 0px 0px 3px;
  max-width: 100%;
  height: auto;
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
      <Image src={`https://image.tmdb.org/t/p/original${posterLocation}`} alt="Poster" />
    </Wrapper>
  );
};

export default Poster;