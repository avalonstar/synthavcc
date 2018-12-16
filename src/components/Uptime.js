import React from 'react';
import PropTypes from 'prop-types';

import * as Providers from 'providers';

import styled from 'styled-components';
import { ChevronRight } from 'react-feather';
import { Capsule } from 'styles';

import { UptimeTimer as Timer } from 'components/Timers';

const propTypes = {
  className: PropTypes.string,
  startTime: PropTypes.number,
  title: PropTypes.string
};

const defaultProps = {
  className: '',
  startTime: null,
  title: ''
};

const StyledTimer = styled(Timer)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${props => props.theme.gotham};
  font-weight: 700;
`;

const Uptime = props => (
  <Providers.Event>
    {({ startTime }) => (
      <Capsule.Wrapper className={props.className}>
        <Capsule.Title>
          <ChevronRight color="#eaf56b" size={18} />
          #AVCC2018
        </Capsule.Title>
        <Capsule.Stat>
          <StyledTimer startTime={startTime} />
        </Capsule.Stat>
      </Capsule.Wrapper>
    )}
  </Providers.Event>
);

Uptime.propTypes = propTypes;
Uptime.defaultProps = defaultProps;

export default Uptime;
