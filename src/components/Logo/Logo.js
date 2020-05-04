import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: solid 1px black;
  width: 100%;
`;

const Logo = () => {
  return (
    <Wrapper>
      <h2>Logo</h2>
    </Wrapper>
  );
};

export default Logo;