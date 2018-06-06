import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import Colors from '../Styles/Colors';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
handleNexbtn(){
  alert('Cadastro');
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
        onPress={()=> this.props.navigation.navigate('Home')}>
          <Text style={styles.buttonTextEsq}> Esqueceu sua Senha ? </Text>
      </TouchableOpacity>

      <TouchableOpacity
              style={styles.button}
              onPress={()=> this.props.navigation.navigate('Home')}>
              <Text style={styles.buttonText}> Entrar </Text>
      </TouchableOpacity>

            <TouchableOpacity
               style={styles.buttonfacebook}
                   onPress={this.onPress}>
                   <FontAwesome
                      name="facebook-square"
                      size={30}
                      color="#fff">
                   </FontAwesome>
                      <Text style={styles.buttonText}> Facebook </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.buttonGmail}
                 onPress={this.onPress}>
                 <FontAwesome
                    name="google"
                    size={30}
                    color="#fff">
                 </FontAwesome>
                 <Text style={styles.buttonText}> Gmail </Text>
            </TouchableOpacity>

       <View style={styles.nextBtn}>
        <Text style={styles.TextnextBtn}>fassa seu registo </Text>
         <TouchableOpacity
         onPress={()=> this.props.navigation.navigate('LoginFor')}>
         <FontAwesome
             name="arrow-circle-right"
             size={55}
             color="rgba(255,255,255,0.6)"
             style={styles.icon} />
        </TouchableOpacity>
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
fontSize:20,
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
  flexDirection: 'row',
},

buttonText: {
  color: Colors.Branco,
  fontSize: 25,
  fontWeight: 'bold',
},

buttonfacebook: {
  height: 45,
  backgroundColor: Colors.btnFacebook,
  alignSelf: 'stretch',
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  borderWidth: 1,
  borderColor: Colors.Branco,
  flexDirection: 'row',
},

buttonGmail: {
  height: 45,
  backgroundColor: '#F44336',
  alignSelf: 'stretch',
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  borderWidth: 1,
  borderColor: Colors.Branco,
  flexDirection: 'row',
},
nextBtn:{
  alignItems: 'flex-end',
  right: 10,

},

TextnextBtn:{
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
}
});
