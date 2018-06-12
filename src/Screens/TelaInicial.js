/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TelaInicial extends Component {
  static navigationOptions={
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>m the MyComponent component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
