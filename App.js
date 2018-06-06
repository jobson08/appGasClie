
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';

import StackScreen from './src/Navigations/StackNav'
import DrawerScreen from './src/Navigations/DrawerNav'



export default class App extends Component {
  render() {
    return (
      <StackScreen />
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
