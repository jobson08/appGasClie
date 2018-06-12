/* @flow */

import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { Card, CardItem, Right } from 'native-base'

export default class CardProduto extends Component {
  render() {
    return (

        <CardItem>


        <Right style={styles.container}>
            <Text style={styles.nomeProduto}>{this.props.itemNome}</Text>
            <Text style={styles.descricaoProduto}>{this.props.itemDesricao}</Text>
            <Text style={styles.textValor}>{this.props.itemValor}</Text>
        </Right>
        </CardItem>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'flex-start',
    height: 90,
    paddingHorizontal: 20
  },
  imagens:{
    height: 50,
    width: 40
  },
  nomeProduto:{
  fontSize: 16,
  fontWeight: 'bold'
  },
  textValor:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#c4402f'
  }
});
