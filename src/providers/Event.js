import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FirestoreDocument } from 'react-firestore';

const propTypes = {
  children: PropTypes.func.isRequired
};

class EventProvider extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <FirestoreDocument
        path="uxc/avalonstar/special/christmas"
        render={({ isLoading, data }) => (isLoading ? null : children(data))}
      />
    );
  }
}

EventProvider.propTypes = propTypes;

export default EventProvider;
