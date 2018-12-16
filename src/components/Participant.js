import React from 'react';

import * as Providers from 'providers';

import { ChevronRight } from 'react-feather';
import { Capsule } from 'styles';

const Participant = () => (
  <Capsule.Wrapper>
    <Capsule.Title>
      <ChevronRight color="#eaf56b" size={18} />
      {'Live Now'}
    </Capsule.Title>
    <Providers.Participant>
      {({ caster }) => <Capsule.Stat>{caster}</Capsule.Stat>}
    </Providers.Participant>
  </Capsule.Wrapper>
);

export default Participant;
