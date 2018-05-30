/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Styles/Colors';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style ={styles.quadroLogin}>

          <View style={styles.topoPainel}>

          <Text style={styles.textTopoPainel}>Faça seu Pedido

          <Icon
            name="cart-arrow-down"
            size={30}
            color={Colors.Branco}
            style={styles.icon}
          />
          </Text>
          </View>



          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AzulPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
quadroLogin: {
width: 350,
height: 500,
backgroundColor: 'rgba(0,0,0,0.4)',
borderWidth: 1,
borderColor: 'steelblue',
},
topoPainel: {
width: 350,
height: 40,
backgroundColor:  'rgba(0,0,10,0.2)',
},

textTopoPainel: {
color: '#ffffff',
textAlign: 'center',
fontSize: 22,
fontWeight: 'bold',
},

textoTela: {
color: '#ffffff',
textAlign: 'center',
fontSize:20,
fontWeight: 'bold',
marginBottom: 10,
},

});
