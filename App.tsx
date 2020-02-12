import * as React from 'react';
import Home from './app/views/Home';
import Contact from './app/views/Contact';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const routes = createStackNavigator({
  Home: { screen: Home },
  Contact: { screen: Contact },
// tslint:disable-next-line: align
}, { initialRouteName: 'Home' });

// tslint:disable-next-line: variable-name
const AppContainer = createAppContainer(routes);

const App = () => {
  return (
    <AppContainer />
  );
};

export default App;
