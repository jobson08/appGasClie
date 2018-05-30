
import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';
import Login from './src/Screens/Login';
import LoginFor from './src/Screens/LoginFor';
import Home from './src/Screens/Home';

export default class App extends Component<Props> {
  render() {
    return (
      <Login />
    );
  }
}
