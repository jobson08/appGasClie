
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import Login from './src/Screens/Login';
import LoginFor from './src/Screens/LoginFor';
import Home from './src/Screens/Home';
import Pedidos from './src/Screens/Pedidos';

import { DrawerNavigator} from 'react-navigation'

export default class App extends Component {
  render() {
    return (
      <MyApp/>
    );
  }
}
const MyApp = DrawerNavigator({
  Login:{
    screen: Login
  },
  Home:{
    screen: Home
  },
  Pedidos: {
    screen: Pedidos
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  });
