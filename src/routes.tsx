import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'src/redux/store';
import Home from 'src/pages/home/home';
import EnvironmentVariables from 'src/constants/EnvironmentVariables';
import Capacitacion from 'src/pages/capacitacion/capacitacion';
import Portal from 'src/pages/portal/portal';
import Consultoria from 'src/pages/consultoria/consultoria';

const env = EnvironmentVariables.getInstance();
const isMobileApp = env.isMobileApp;

const Routes = (): React.ReactElement => {
  return (
    <Router forceRefresh={!isMobileApp}>
      <Switch>
        <Route path='/consultoria'>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}><Consultoria /></PersistGate>
          </Provider>
        </Route>
        <Route path='/portal'>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}><Portal /></PersistGate>
          </Provider>
        </Route>
        <Route path='/capacitacion'>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}><Capacitacion /></PersistGate>
          </Provider>
        </Route>
        <Route path='/'>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}><Home /></PersistGate>
          </Provider>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
