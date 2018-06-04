/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../Styles/Colors';

import { Container, Content, Header, Left, Right, Icon } from 'native-base';

export default class Home extends Component {
  render() {
    return (
    <Container>
      <Header>
        <Right>
          <Icon name="md-menu" onPress={()=> this.props.navigation.navigate('DrawerOpen')}
          style={{color: 'white', marginRight: 375}} />
        </Right>
      </Header>

      <View style ={styles.container}>
      <View style ={styles.quadroLogin}>

       <View style={styles.topoPainel}>
       <TouchableOpacity  style={styles.btnPedidos} onPress={()=> this.props.navigation.navigate('Pedidos')}>
          <Text style={styles.textTopoPainel}>Faça seu Pedido </Text>
          <FontAwesome
              name="cart-arrow-down"
              size={30}
              color={Colors.Branco}
              style={styles.icon} />

          <FontAwesome
              name="angle-right"
              size={35}
              color={Colors.Branco}
              style={{ marginLeft:40}} />

          </TouchableOpacity>
        </View>

          </View>
         </View>
      </Container>
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
tituloHeader:{
  color: 'white',
  fontSize: 20,
  textAlign: 'center',
  fontWeight: 'bold',
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
flexDirection: 'row',
paddingHorizontal:70,
alignItems: "center",
justifyContent: 'space-between'
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
btnPedidos:{
  flexDirection: 'row',
},

});
