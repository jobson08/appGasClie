
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar
} from 'react-native';

import StackNav from './src/Navigations/StackNav'
import SelecionarPedido from'./src/Screens/SelecionarPedido'

export default class App extends Component {
  render() {
    return (
      <StackNav  />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  });
