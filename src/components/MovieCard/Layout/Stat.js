import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  margin: 10px 0;
`;

const Title = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  padding-bottom: 5px;
`;

const P = styled.div`
  color: #00FC87;
  line-height: 1.1em;
  font-size: 1.6em;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;

`;

const Stat = (props) => {
  return (
    <Wrapper>
      <Title>{props.heading}:</Title>
      <P>{props.data}</P>
    </Wrapper>
  );
}

export default Stat;
