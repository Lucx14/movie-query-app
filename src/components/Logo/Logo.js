import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  font-family: 'Permanent Marker', cursive;
  font-size: 1.3rem;
  color: #00FC87;
`;

const Logo = () => {
  return (
    <Wrapper>
      <h2>Movie Search Engine</h2>
    </Wrapper>
  );
};

export default Logo;