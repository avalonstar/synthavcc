import React from 'react';
import PropTypes from 'prop-types';

import * as Providers from 'providers';

import { ChevronRight } from 'react-feather';
import { Capsule } from 'styles';

const statisticPropTypes = {
  score: PropTypes.number.isRequired,
  goal: PropTypes.shape({}).isRequired
};

const Statistic = ({ score }) => (
  <Capsule.Stat>
    {score}
    SP
  </Capsule.Stat>
);

const Total = () => (
  <Capsule.Wrapper>
    <Capsule.Title>
      <ChevronRight color="#eaf56b" size={18} />
      {'2018 Total'}
    </Capsule.Title>
    <Providers.Broadcaster>
      {({ subscriptions }) => <Statistic score={subscriptions.score} />}
    </Providers.Broadcaster>
  </Capsule.Wrapper>
);

Statistic.propTypes = statisticPropTypes;

export default Total;
