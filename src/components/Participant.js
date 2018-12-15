import React from 'react';
import PropTypes from 'prop-types';

import { ChevronRight } from 'react-feather';
import { Capsule } from 'styles';

const Participant = props => (
  <Capsule.Wrapper>
    <Capsule.Title>
      <ChevronRight color="#eaf56b" size={18} />
      {'Live Now'}
    </Capsule.Title>
    <Capsule.Stat>{props.name}</Capsule.Stat>
  </Capsule.Wrapper>
);

export default Participant;
