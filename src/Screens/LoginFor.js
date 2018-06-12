
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import { Container, Content, Header, Left, Right, Icon } from 'native-base';

import Colors from '../Styles/Colors';


class LoginFor extends Component {
  buttonEntar() {
  alert('entar com email');
}
  render() {
    return (
  <View style={styles.container}>
  <StatusBar
  backgroundColor={Colors.ColorStatubar}
  animated={true}
  />
    <View style ={styles.quadroLogin}>

        <View style={styles.topoPainel}>
            <Text style={styles.textTopoPainel}>Fornecedor</Text>
        </View>

           <Text style={styles.textoTela}>Entre com o seu Login</Text>

            <TextInput
             style={styles.input} underlineColorAndroid='rgba(0,0,0,0)'
             placeholder="E-mail"
           />

           <TextInput
             style={styles.input}
             placeholder="Senha"
            />

            <TextInput
              style={styles.input}
              placeholder="Confirma Senha"
             />

      <TouchableOpacity
          style={styles.buttonEsq}
          onPress={this.btnEsqSenha}>
          <Text style={styles.buttonTextEsq}> Esqueceu sua Senha ? </Text>
      </TouchableOpacity>

      <TouchableOpacity
              style={styles.button}
              onPress={()=> this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonText}> Salvar</Text>
      </TouchableOpacity>

    </View>
</View>
    );
  }
}

export default LoginFor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AzulPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    borderBottomColor: '#757575',
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

input: {
height: 45,
backgroundColor: '#ffffff',
alignSelf: 'stretch',
borderColor: 'steelblue',
borderWidth: 1,
paddingHorizontal: 20,
marginBottom:5,
borderRadius: 20,
marginTop: 5,
},

buttonEsq: {
alignItems: 'center'
},

buttonTextEsq: {
color: '#ffffff',
fontSize: 15,
fontWeight: 'bold',
},
button: {
  height: 45,
  backgroundColor: Colors.BtnVerde,
  alignSelf: 'stretch',
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  borderWidth: 1,
  borderColor: Colors.Branco,
},

buttonText: {
  color: Colors.Branco,
  fontSize: 25,
  fontWeight: 'bold',
},
});
