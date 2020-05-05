import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  color: #00fc87;
  line-height: 1.1em;
  font-size: 1.6em;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
`;

const Stat = (props) => {
  const { heading, data } = props;
  return (
    <Wrapper>
      <Title>{heading}:</Title>
      <P>{data}</P>
    </Wrapper>
  );
};

Stat.propTypes = {
  heading: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default Stat;
