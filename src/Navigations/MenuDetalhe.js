/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MenuDetalhe extends Component {
  render() {
    return (
      <View style={styles.container}>

          <View>
            <Text>Ola usuario</Text>
          </View>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
