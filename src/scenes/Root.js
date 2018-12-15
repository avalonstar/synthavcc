import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';

import firebase from '@firebase/app';
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';

import { ThemeProvider } from 'styled-components';

import { Activity, Sounds } from 'scenes/Activity';
import App from 'scenes/App';
import { foundation } from 'styles/foundation';
import { history } from 'store';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_URI
} = process.env;

firebase.initializeApp({
  apiKey: REACT_APP_FIREBASE_API_KEY,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: REACT_APP_FIREBASE_URI
});

const firestore = firebase.firestore();
const firestoreSettings = { timestampsInSnapshots: true };
firestore.settings(firestoreSettings);

const Main = () => (
  <Switch>
    <Route exact path="/scenes/activity/sounds" component={Sounds} />
    <Route exact path="/scenes/activity" component={Activity} />
    <Route component={App} />
  </Switch>
);

const Root = (
  { store } // eslint-disable-line
) => (
  <FirestoreProvider firebase={firebase}>
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={foundation}>
          <Main />
        </ThemeProvider>
      </Router>
    </Provider>
  </FirestoreProvider>
);

export default Root;
