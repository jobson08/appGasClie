/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import Colors from '../Styles/Colors';
//import FontAwesome from 'react-native-vector-icons/FontAwesome';
///import { Container, Content, Header, Left, Right, Icon } from 'native-base';

class Pedidos extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor={Colors.ColorStatubar}
      animated={true}
      />
          <Text>Pedidos</Text>
      </View>
    );
  }
}

export default Pedidos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
