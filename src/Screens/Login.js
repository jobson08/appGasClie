import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Colors from '../Styles/Colors';
import ButtonG from '../Components/ButtonG';

export default class Login extends Component {
  buttonEntar() {
  alert('entar com email');
}
buttonFacebook() {
alert('entar com Facebook');
}
buttonGmail() {
alert('entar com Gmail');
}
  render() {
    return (
  <View style={styles.container}>

    <View style ={styles.quadroLogin}>

        <View style={styles.topoPainel}>
            <Text style={styles.textTopoPainel}>Bom dia</Text>
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

      <TouchableOpacity
          style={styles.buttonEsq}
          onPress={this.btnEsqSenha}>
          <Text style={styles.buttonTextEsq}> Esqueceu sua Senha ? </Text>
      </TouchableOpacity>

      <ButtonG
        text="Entrar"
        textColor={Colors.Branco}
        background={Colors.BtnVerde}
        handleOnPress={this.buttonEntar}
      />

      <ButtonG
           text="Facebook"
           textColor={Colors.Branco}
           background={Colors.btnFacebook}
           handleOnPress={this.buttonFacebook}
       />

       <ButtonG
           text="Gmail"
           textColor={Colors.Branco}
           background={Colors.BtnVermelho}
           handleOnPress={this.buttonGmail}
       />


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

});
