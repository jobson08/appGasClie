import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Colors from '../Styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ButtonNext extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Icon
          name="angle-right"
          size={50}
          color={Colors.Branco}
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50,
  width: 60,
  height: 60,
},
  icon: {
    marginRight: -2,
    marginTop: -2,
  }
});
