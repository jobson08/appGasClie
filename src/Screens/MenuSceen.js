/* @flow weak */

/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {Icon, Button, container, Header, Content, Left}

export default class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>m the MenuScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
