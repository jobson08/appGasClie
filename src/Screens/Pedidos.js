/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Header, Left, Right, Icon } from 'native-base';
export default class Pedidos extends Component {
  render() {
    return (
      <Container>
        <Header style ={styles.headerStyle}>
          <Right>
            <FontAwesome name="angle-left" onPress={()=> this.props.navigation.navigate('Home')}
            style={{color: 'white', fontSize:40, marginRight: 375}}
           />
          </Right>
        </Header>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerStyle: {
    borderBottomColor: '#757575',
  }
});
