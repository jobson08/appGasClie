import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Colors from '../Styles/Colors'

export default class ButtonG extends Component {
  render() {
    const { text, textColor, background,  handleOnPress } = this.props;
    const backgroundColor = background || 'trasparent';
    const color = textColor || colors.branco;
    return (
      <TouchableOpacity style={[{backgroundColor},styles.container]}
      onPress={handleOnPress}>
      <View>
         <Text style={[{color}, styles.btnTextos]}>{text}</Text>
       </View>
       </TouchableOpacity>
    );
  }
}
ButtonG.PropTypes ={
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  handleOnPress: PropTypes.func.isRequired,
};

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      padding: 10,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: Colors.Branco,
      marginTop: 10,
    },
  btnTextos: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
}
  });
