import React from 'react';
import PropTypes from 'prop-types';

import * as Providers from 'providers';

import { ChevronRight } from 'react-feather';
import { Capsule } from 'styles';

const propTypes = {
  caster: PropTypes.string
};

const defaultProps = {
  caster: 'break'
};

const Display = ({ caster }) => (
  <Capsule.Wrapper>
    <Capsule.Title>
      <ChevronRight color="#eaf56b" size={18} />
      {caster !== 'break' ? 'Live Now' : 'Currently on Break'}
    </Capsule.Title>
    {caster !== 'break' && <Capsule.Stat>{caster}</Capsule.Stat>}
  </Capsule.Wrapper>
);

const Participant = () => (
  <Providers.Participant>
    {({ caster }) => <Display caster={caster} />}
  </Providers.Participant>
);

Display.propTypes = propTypes;
Display.defaultProps = defaultProps;

export default Participant;
