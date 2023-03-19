import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Stack from './src/menu/stack_menu';
import TabHome from "./src/menu/tab_menu";
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <TabHome/>
      </NavigationContainer>
    );
  }
}

export default App;
